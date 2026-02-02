import { create } from 'zustand';
import type { EmailTemplate, EmailElement, EditorState, User, FeatureFlags, MergeTag } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Default feature flags for free tier
const DEFAULT_FREE_FEATURES: FeatureFlags = {
  advancedElements: false,
  advancedLayout: false,
  advancedStyling: false,
  proTemplates: false,
  bulkExport: false,
  integrations: false,
  analytics: false,
  teamManagement: false,
};

// Default feature flags for pro tier
const DEFAULT_PRO_FEATURES: FeatureFlags = {
  advancedElements: true,
  advancedLayout: true,
  advancedStyling: true,
  proTemplates: true,
  bulkExport: true,
  integrations: true,
  analytics: true,
  teamManagement: false,
};

interface EditorStore extends EditorState {
  // Template Actions
  createTemplate: (name: string, description?: string) => void;
  loadTemplate: (id: string, template: EmailTemplate) => void;
  updateTemplate: (updates: Partial<EmailTemplate>) => void;
  saveTemplate: () => void;

  // Element Actions
  addElement: (element: EmailElement) => void;
  addElementAtIndex: (element: EmailElement, index: number) => void;
  addChildElement: (parentId: string, element: EmailElement) => void;
  updateElement: (id: string, updates: Partial<EmailElement>) => void;
  deleteElement: (id: string) => void;
  selectElement: (id: string | null) => void;
  duplicateElement: (id: string) => void;
  reorderElements: (oldIndex: number, newIndex: number) => void;
  moveElement: (activeId: string, overId: string) => void;
  updateRowLayout: (rowId: string, columnWidths: string[]) => void;
  deleteColumn: (rowId: string, columnId: string) => void;

  // Editor State Actions
  setZoom: (zoom: number) => void;
  setShowGrid: (show: boolean) => void;
  setSnapToGrid: (snap: boolean) => void;
  setGridSize: (size: number) => void;

  // History Actions
  undo: () => void;
  redo: () => void;
  clearHistory: () => void;

  // Reset
  reset: () => void;
}

interface UserStore {
  currentUser: User | null;
  features: FeatureFlags;
  setUser: (user: User) => void;
  setFeatures: (features: FeatureFlags) => void;
  upgradeToPro: () => void;
  logout: () => void;
}

interface TemplateLibraryStore {
  templates: EmailTemplate[];
  addTemplate: (template: EmailTemplate) => void;
  removeTemplate: (id: string) => void;
  updateTemplate: (id: string, updates: Partial<EmailTemplate>) => void;
  getTemplate: (id: string) => EmailTemplate | undefined;
}

// Create Editor Store
export const useEditorStore = create<EditorStore>((set, get) => {
  const createEmptyTemplate = (): EmailTemplate => ({
    id: uuidv4(),
    name: 'New Email',
    elements: [],
    width: 600,
    defaultFontFamily: 'Arial',
    defaultFontSize: 16,
    defaultLineHeight: 1.5,
    defaultTextColor: '#000000',
    defaultBackgroundColor: '#ffffff',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const addToHistory = () => {
    const state = get();
    if (state.currentTemplate) {
      const newHistory = state.history.slice(0, state.historyIndex + 1);
      newHistory.push(JSON.parse(JSON.stringify(state.currentTemplate)));
      set({
        history: newHistory,
        historyIndex: newHistory.length - 1,
      });
    }
  };

  return {
    currentTemplate: null,
    selectedElementId: null,
    zoom: 100,
    isDirty: false,
    history: [],
    historyIndex: -1,
    showGrid: false,
    snapToGrid: false,
    gridSize: 10,

    // Template Actions
    createTemplate: (name: string, description?: string) => {
      const template = createEmptyTemplate();
      template.name = name;
      if (description) template.description = description;
      
      // Automatically add a default row with column for new templates
      const defaultRow = {
        id: uuidv4(),
        type: 'row' as const,
        label: 'Row',
        children: [
          {
            id: uuidv4(),
            type: 'column' as const,
            label: 'Column',
            children: [],
            width: '100%',
            padding: { top: 20, right: 20, bottom: 20, left: 20 },
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
            visible: true,
            locked: false,
          }
        ],
        width: '100%',
        gap: 10,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        visible: true,
        locked: false,
      };
      
      template.elements = [defaultRow as any];
      
      set({
        currentTemplate: template,
        selectedElementId: null,
        isDirty: false,
        history: [template],
        historyIndex: 0,
      });
    },

    loadTemplate: (_id: string, template: EmailTemplate) => {
      // Create a completely new object to ensure reference changes
      const newTemplate = JSON.parse(JSON.stringify(template));
      set({
        currentTemplate: newTemplate,
        selectedElementId: null,
        isDirty: false,
        history: [newTemplate],
        historyIndex: 0,
      });
    },

    updateTemplate: (updates: Partial<EmailTemplate>) => {
      set((state) => ({
        currentTemplate: state.currentTemplate
          ? { ...state.currentTemplate, ...updates, updatedAt: new Date().toISOString() }
          : null,
        isDirty: true,
      }));
      addToHistory();
    },

    saveTemplate: () => {
      set({ isDirty: false });
    },

    // Element Actions
    addElement: (element: EmailElement) => {
      set((state) => ({
        currentTemplate: state.currentTemplate
          ? {
              ...state.currentTemplate,
              elements: [...state.currentTemplate.elements, element],
              updatedAt: new Date().toISOString(),
            }
          : null,
        isDirty: true,
      }));
      addToHistory();
    },

    addElementAtIndex: (element: EmailElement, index: number) => {
      set((state) => {
        if (!state.currentTemplate) return state;
        const elements = [...state.currentTemplate.elements];
        elements.splice(index, 0, element);
        return {
          currentTemplate: {
            ...state.currentTemplate,
            elements,
            updatedAt: new Date().toISOString(),
          },
          selectedElementId: element.id,
          isDirty: true,
        };
      });
      addToHistory();
    },

    addChildElement: (parentId: string, element: EmailElement) => {
      set((state) => {
        if (!state.currentTemplate) return state as any;

        const addRecursive = (elements: EmailElement[]): EmailElement[] => {
          return elements.map((el) => {
            if (el.id === parentId) {
              // Found the parent, append child
              const children = 'children' in el && (el as any).children ? [...(el as any).children] : [];
              return {
                ...el,
                children: [...children, element],
              } as EmailElement;
            }
            // Continue searching deep
            if ('children' in el && (el as any).children) {
              return {
                ...el,
                children: addRecursive((el as any).children),
              } as EmailElement;
            }
            return el;
          });
        };

        return {
          currentTemplate: {
            ...state.currentTemplate,
            elements: addRecursive(state.currentTemplate.elements),
            updatedAt: new Date().toISOString(),
          } as EmailTemplate,
          selectedElementId: element.id,
          isDirty: true,
        } as any;
      });
      addToHistory();
    },

    updateElement: (id: string, updates: Partial<EmailElement>) => {
      set((state) => {
        if (!state.currentTemplate) return state as any;

        const updateRecursive = (elements: EmailElement[]): EmailElement[] => {
          return elements.map((el) => {
            if (el.id === id) {
              return { ...el, ...updates } as EmailElement;
            }
            if ('children' in el && (el as any).children) {
              // Ensure we return the correct container type with updated children
              return {
                ...el,
                children: updateRecursive((el as any).children),
              } as EmailElement;
            }
            return el;
          });
        };

        return {
          currentTemplate: {
            ...state.currentTemplate,
            elements: updateRecursive(state.currentTemplate.elements),
            updatedAt: new Date().toISOString(),
          } as EmailTemplate,
          isDirty: true,
        } as any;
      });
      addToHistory();
    },

    deleteElement: (id: string) => {
      set((state) => {
        if (!state.currentTemplate) return state as any;

        const deleteRecursive = (elements: EmailElement[]): EmailElement[] => {
          return elements
            .filter((el) => el.id !== id)
            .map((el) => {
              if ('children' in el && (el as any).children) {
                return {
                  ...el,
                  children: deleteRecursive((el as any).children),
                };
              }
              return el;
            });
        };

        return {
          currentTemplate: {
            ...state.currentTemplate,
            elements: deleteRecursive(state.currentTemplate.elements),
            updatedAt: new Date().toISOString(),
          } as EmailTemplate,
          selectedElementId: state.selectedElementId === id ? null : state.selectedElementId,
          isDirty: true,
        } as any;
      });
      addToHistory();
    },

    selectElement: (id: string | null) => {
      set({ selectedElementId: id });
    },

    duplicateElement: (id: string) => {
      const state = get();
      if (!state.currentTemplate) return;

      // Helper to find and clone
      const findAndClone = (elements: EmailElement[]): EmailElement | null => {
        for (const el of elements) {
          if (el.id === id) {
             // Deep clone with new IDs for children
             const deepClone = (item: EmailElement): EmailElement => {
                const cloned = { ...item, id: uuidv4() };
                if ('children' in cloned && (cloned as any).children) {
                    (cloned as any).children = (cloned as any).children.map(deepClone);
                }
                return cloned;
             };
             return deepClone(el);
          }
          if ('children' in el && (el as any).children) {
            const result = findAndClone((el as any).children);
            if (result) return result;
          }
        }
        return null;
      };

      const clonedElement = findAndClone(state.currentTemplate.elements);
      if (clonedElement) {
          // Add it to the list. Ideally next to the original... but for now append to root or implement insert logic
          // Actually, duplicate usually means "clone next to original".
          // Let's implement insertNextTo logic
          
          set((state) => {
             if (!state.currentTemplate) return state as any;
             
             const insertRecursive = (elements: EmailElement[]): EmailElement[] => {
                const index = elements.findIndex(el => el.id === id);
                if (index !== -1) {
                    const newElements = [...elements];
                    newElements.splice(index + 1, 0, clonedElement);
                    return newElements;
                }
                return elements.map(el => {
                    if ('children' in el && (el as any).children) {
                        return {
                            ...el,
                            children: insertRecursive((el as any).children)
                        }
                    }
                    return el;
                });
             };

             return {
                currentTemplate: {
                    ...state.currentTemplate,
                    elements: insertRecursive(state.currentTemplate.elements),
                    updatedAt: new Date().toISOString(),
                } as EmailTemplate,
                isDirty: true,
             } as any;
          });
          addToHistory();
      }
    },

    reorderElements: (oldIndex: number, newIndex: number) => {
      set((state) => {
        if (!state.currentTemplate) return state as any;

        const elements = [...state.currentTemplate.elements];
        const [removed] = elements.splice(oldIndex, 1);
        elements.splice(newIndex, 0, removed);

        return {
          currentTemplate: {
            ...state.currentTemplate,
            elements,
            updatedAt: new Date().toISOString(),
          } as EmailTemplate,
          isDirty: true,
        } as any;
      });
      addToHistory();
    },

    moveElement: (activeId: string, overId: string) => {
      set((state) => {
        if (!state.currentTemplate) return state as any;

        // Deep clone the elements tree
        const newElements = JSON.parse(JSON.stringify(state.currentTemplate.elements));

        // Validation: Check if child type can be nested in parent type
        const canBeChild = (childType: string, parentType: string): boolean => {
          const validRelationships: Record<string, string[]> = {
            'root': ['row', 'section'],
            'row': ['column'],
            'column': ['text', 'image', 'button', 'divider', 'spacer', 'heading', 'video', 'html'],
            'section': ['row'],
          };
          
          return validRelationships[parentType]?.includes(childType) ?? false;
        };

        // Helper to find an element by ID
        const findElement = (items: EmailElement[], id: string): EmailElement | null => {
          for (const item of items) {
            if (item.id === id) return item;
            if ('children' in item && (item as any).children) {
              const found = findElement((item as any).children, id);
              if (found) return found;
            }
          }
          return null;
        };

        // Helper to find parent container and index
        const findParent = (items: EmailElement[], id: string, parentEl: EmailElement | null = null): { container: EmailElement[] | null, index: number, parentElement: EmailElement | null } => {
          for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
              return { container: items, index: i, parentElement: parentEl };
            }
            if ('children' in items[i] && (items[i] as any).children) {
              const res = findParent((items[i] as any).children, id, items[i]);
              if (res.container) return res;
            }
          }
          return { container: null, index: -1, parentElement: null };
        };

        // Get element types
        const activeElement = findElement(newElements, activeId);
        const overElement = findElement(newElements, overId);
        
        if (!activeElement || !overElement) return state as any;

        // Find sources and determine reordering context
        const source = findParent(newElements, activeId);
        let target = findParent(newElements, overId);
        
        if (!source.container) return state as any;

        // Special handling for row reordering:
        // If dragging a row and the target is a child (column/content), 
        // find the target's parent row and reorder at that level
        if (activeElement.type === 'row') {
          
          // Find the nearest row ancestor of the drop target
          let targetRow = overElement;
          let targetParent = target.parentElement;
          
          // Walk up to find a row (if target is not already a row at root level)
          while (targetRow && targetRow.type !== 'row' && targetParent) {
            targetRow = targetParent;
            const parentInfo = findParent(newElements, targetRow.id);
            targetParent = parentInfo.parentElement;
          }
          
          // If we found a row that's different from active, use it as target
          if (targetRow && targetRow.type === 'row' && targetRow.id !== activeId) {
            target = findParent(newElements, targetRow.id);
          } else if (overElement.type !== 'row') {
            // Target is not a row and doesn't have a row ancestor at the same level
            // Don't perform any operation
            return state as any;
          }
        }

        if (!target.container) return state as any;

        // Check if both are in the same container
        const sourceParentId = source.parentElement?.id ?? 'root';
        const targetParentId = target.parentElement?.id ?? 'root';
        const isSameContainer = sourceParentId === targetParentId;
        
        if (isSameContainer) {
            // Same container reordering
            const parentType = source.parentElement ? source.parentElement.type : 'root';
            const activeType = source.container[source.index].type;
            
            if (!canBeChild(activeType, parentType)) {
              console.warn(`Cannot reorder ${activeType} in ${parentType}`);
              return state as any;
            }

            const oldIndex = source.index;
            const newIndex = target.index;
            
            // Skip if indices are the same
            if (oldIndex === newIndex) return state as any;
            
            // Skip if already adjacent in the target direction to prevent oscillation
            // during continuous dragOver events
            if (Math.abs(oldIndex - newIndex) === 1) {
              // Elements are adjacent - only move if we're moving in the correct direction
              // This prevents the back-and-forth swapping during prolonged drag
              const movingUp = newIndex < oldIndex;
              if (movingUp && source.container[newIndex].id === overId) {
                // Already positioned correctly relative to target
                return state as any;
              }
            }
            
            // Use array move logic - remove from old position and insert at new
            const [movedElement] = source.container.splice(oldIndex, 1);
            source.container.splice(newIndex, 0, movedElement);
        } else {
            // Different container - move between containers
            const parentType = target.parentElement ? target.parentElement.type : 'root';
            const activeType = source.container[source.index].type;
            
            if (!canBeChild(activeType, parentType)) {
              console.warn(`Cannot move ${activeType} into ${parentType}`);
              return state as any;
            }
            
            // Remove from source
            const [movedElement] = source.container.splice(source.index, 1);
            
            // Re-find target after removal (indices might have shifted if same array)
            const finalTarget = findParent(newElements, overId);
            if (finalTarget.container) {
              finalTarget.container.splice(finalTarget.index, 0, movedElement);
            } else {
              // Fallback: put it back
              source.container.splice(source.index, 0, movedElement);
            }
        }

        return {
          currentTemplate: {
            ...state.currentTemplate,
            elements: newElements,
            updatedAt: new Date().toISOString(),
          } as EmailTemplate,
          isDirty: true,
        } as any;
      });
      addToHistory();
    },

    updateRowLayout: (rowId: string, columnWidths: string[]) => {
      set((state) => {
        if (!state.currentTemplate) return state as any;

        const updateRecursive = (elements: EmailElement[]): EmailElement[] => {
          return elements.map((el) => {
            if (el.id === rowId && el.type === 'row') {
              // Found the row
              let currentChildren = 'children' in el && (el as any).children ? [...(el as any).children] : [];
              
              // Adjust number of columns
              if (currentChildren.length < columnWidths.length) {
                // Add needed columns
                const needed = columnWidths.length - currentChildren.length;
                for (let i = 0; i < needed; i++) {
                  currentChildren.push({
                    id: uuidv4(),
                    type: 'column',
                    label: 'Column',
                    children: [],
                    width: columnWidths[currentChildren.length],
                    padding: { top: 20, right: 20, bottom: 20, left: 20 },
                    margin: { top: 0, right: 0, bottom: 0, left: 0 },
                    visible: true,
                    locked: false,
                  } as any);
                }
              } else if (currentChildren.length > columnWidths.length) {
                // Remove excess columns
                currentChildren = currentChildren.slice(0, columnWidths.length);
              }

              // Update widths and ensure padding consistency for symmetry
              currentChildren = currentChildren.map((child, index) => {
                // Determine if we should force default padding (if it's missing or all zeros)
                const isZeroPadding = child.padding && 
                  child.padding.top === 0 && 
                  child.padding.right === 0 && 
                  child.padding.bottom === 0 && 
                  child.padding.left === 0;
                  
                const padding = (!child.padding || isZeroPadding) 
                  ? { top: 20, right: 20, bottom: 20, left: 20 } 
                  : child.padding;

                return {
                  ...child,
                  width: columnWidths[index],
                  padding: padding,
                } as any;
              });

              return {
                ...el,
                children: currentChildren
              } as EmailElement;
            }
            
            if ('children' in el && (el as any).children) {
              return {
                ...el,
                children: updateRecursive((el as any).children),
              } as EmailElement;
            }
            return el;
          });
        };

        return {
          currentTemplate: {
            ...state.currentTemplate,
            elements: updateRecursive(state.currentTemplate.elements),
            updatedAt: new Date().toISOString(),
          } as EmailTemplate,
          isDirty: true,
        } as any;
      });
      addToHistory();
    },

    deleteColumn: (rowId: string, columnId: string) => {
      set((state) => {
        if (!state.currentTemplate) return state as any;

        const updateRecursive = (elements: EmailElement[]): EmailElement[] => {
          return elements.map((el) => {
            if (el.id === rowId && el.type === 'row') {
              // Found the row
              let currentChildren = 'children' in el && (el as any).children ? [...(el as any).children] : [];
              
              // Filter out the column to delete
              const filteredChildren = currentChildren.filter((child) => child.id !== columnId);
              
              // If no columns left, we need to delete this row
              if (filteredChildren.length === 0) {
                return null as any; // Mark for deletion
              }
              
              // Redistribute widths equally among remaining columns
              const newWidth = `${(100 / filteredChildren.length).toFixed(2)}%`;
              const redistributedChildren = filteredChildren.map((child) => ({
                ...child,
                width: newWidth
              }));

              return {
                ...el,
                children: redistributedChildren
              } as EmailElement;
            }
            
            if ('children' in el && (el as any).children) {
              return {
                ...el,
                children: updateRecursive((el as any).children),
              } as EmailElement;
            }
            return el;
          }).filter(el => el !== null); // Remove null elements (deleted rows)
        };

        return {
          currentTemplate: {
            ...state.currentTemplate,
            elements: updateRecursive(state.currentTemplate.elements),
            updatedAt: new Date().toISOString(),
          } as EmailTemplate,
          isDirty: true,
          selectedElementId: state.selectedElementId === columnId ? null : state.selectedElementId,
        } as any;
      });
      addToHistory();
    },

    // Editor State Actions
    setZoom: (zoom: number) => set({ zoom }),
    setShowGrid: (show: boolean) => set({ showGrid: show }),
    setSnapToGrid: (snap: boolean) => set({ snapToGrid: snap }),
    setGridSize: (size: number) => set({ gridSize: size }),

    // History Actions
    undo: () => {
      const state = get();
      if (state.historyIndex > 0) {
        const newIndex = state.historyIndex - 1;
        set({
          currentTemplate: state.history[newIndex],
          historyIndex: newIndex,
          isDirty: true,
        });
      }
    },

    redo: () => {
      const state = get();
      if (state.historyIndex < state.history.length - 1) {
        const newIndex = state.historyIndex + 1;
        set({
          currentTemplate: state.history[newIndex],
          historyIndex: newIndex,
          isDirty: true,
        });
      }
    },

    clearHistory: () => {
      set({ history: [], historyIndex: -1 });
    },

    reset: () => {
      set({
        currentTemplate: null,
        selectedElementId: null,
        zoom: 100,
        isDirty: false,
        history: [],
        historyIndex: -1,
        showGrid: false,
        snapToGrid: false,
      });
    },
  };
});

// Create User Store
export const useUserStore = create<UserStore>((set) => ({
  currentUser: null,
  features: DEFAULT_FREE_FEATURES,

  setUser: (user: User) => {
    const features = user.plan === 'pro' ? DEFAULT_PRO_FEATURES : DEFAULT_FREE_FEATURES;
    set({ currentUser: user, features });
  },

  setFeatures: (features: FeatureFlags) => {
    set({ features });
  },

  upgradeToPro: () => {
    set((state) => ({
      currentUser: state.currentUser
        ? { ...state.currentUser, plan: 'pro' }
        : null,
      features: DEFAULT_PRO_FEATURES,
    }));
  },

  logout: () => {
    set({ currentUser: null, features: DEFAULT_FREE_FEATURES });
  },
}));

// Create Template Library Store
export const useTemplateLibraryStore = create<TemplateLibraryStore>((set, get) => ({
  templates: [],

  addTemplate: (template: EmailTemplate) => {
    set((state) => ({
      templates: [...state.templates, template],
    }));
  },

  removeTemplate: (id: string) => {
    set((state) => ({
      templates: state.templates.filter((t) => t.id !== id),
    }));
  },

  updateTemplate: (id: string, updates: Partial<EmailTemplate>) => {
    set((state) => ({
      templates: state.templates.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      ),
    }));
  },

  getTemplate: (id: string) => {
    return get().templates.find((t) => t.id === id);
  },
}));

// Create Merge Tag Store (for library integration)
interface MergeTagStore {
  mergeTags: MergeTag[];
  mergeTagTriggers: string[];
  setMergeTags: (tags: MergeTag[]) => void;
  setMergeTagTriggers: (triggers: string[]) => void;
  getMergeTagsByTrigger: (trigger: string) => MergeTag[];
}

export const useMergeTagStore = create<MergeTagStore>((set, get) => ({
  mergeTags: [],
  mergeTagTriggers: [], 
  
  setMergeTags: (tags: MergeTag[]) => {
    set({ mergeTags: tags });
  },

  setMergeTagTriggers: (triggers: string[]) => {
    set({ mergeTagTriggers: triggers });
  },

  getMergeTagsByTrigger: (trigger: string) => {
    return get().mergeTags.filter((tag) => tag.trigger === trigger);
  },
}));
