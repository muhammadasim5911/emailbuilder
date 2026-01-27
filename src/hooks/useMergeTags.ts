import { useState, useCallback, useEffect } from 'react';
import { useMergeTagStore } from '../store';
import type { MergeTag } from '../types';

interface UseMergeTagsResult {
  showDropdown: boolean;
  filteredTags: MergeTag[];
  selectedIndex: number;
  handleInputChange: (value: string, cursorPosition: number) => void;
  handleKeyDown: (e: React.KeyboardEvent, onInsert: (tag: MergeTag) => void) => void;
  selectTag: (tag: MergeTag, onInsert: (tag: MergeTag) => void) => void;
  closeDropdown: () => void;
}

/**
 * Custom hook for merge tag functionality
 * Detects trigger characters and shows dropdown with filtered merge tags
 */
export const useMergeTags = (): UseMergeTagsResult => {
  const { mergeTags, mergeTagTriggers } = useMergeTagStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredTags, setFilteredTags] = useState<MergeTag[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentTrigger, setCurrentTrigger] = useState<string | null>(null);

  // Detect trigger character in text
  const handleInputChange = useCallback((value: string, cursorPosition: number) => {
    // Get text before cursor
    const textBeforeCursor = value.substring(0, cursorPosition);
    
    // Check for any trigger character
    let foundTrigger: string | null = null;
    let triggerIndex = -1;
    
    for (const trigger of mergeTagTriggers) {
      const lastIndex = textBeforeCursor.lastIndexOf(trigger);
      if (lastIndex > triggerIndex) {
        triggerIndex = lastIndex;
        foundTrigger = trigger;
      }
    }
    
    if (foundTrigger && triggerIndex !== -1) {
      // Check if there's a space between trigger and cursor (if so, close dropdown)
      const textAfterTrigger = textBeforeCursor.substring(triggerIndex + foundTrigger.length);
      if (textAfterTrigger.includes(' ')) {
        setShowDropdown(false);
        setCurrentTrigger(null);
        return;
      }
      
      // Filter tags by trigger
      const tagsForTrigger = mergeTags.filter(tag => tag.trigger === foundTrigger);
      
      // Further filter by search term after trigger
      const searchTerm = textAfterTrigger.toLowerCase();
      const filtered = searchTerm
        ? tagsForTrigger.filter(tag => 
            tag.label.toLowerCase().includes(searchTerm) ||
            tag.value.toLowerCase().includes(searchTerm)
          )
        : tagsForTrigger;
      
      setFilteredTags(filtered);
      setCurrentTrigger(foundTrigger);
      setShowDropdown(filtered.length > 0);
      setSelectedIndex(0);
    } else {
      setShowDropdown(false);
      setCurrentTrigger(null);
    }
  }, [mergeTags, mergeTagTriggers]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, onInsert: (tag: MergeTag) => void) => {
    if (!showDropdown) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredTags.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredTags.length) % filteredTags.length);
        break;
      case 'Enter':
      case 'Tab':
        e.preventDefault();
        if (filteredTags[selectedIndex]) {
          selectTag(filteredTags[selectedIndex], onInsert);
        }
        break;
      case 'Escape':
        e.preventDefault();
        closeDropdown();
        break;
    }
  }, [showDropdown, filteredTags, selectedIndex]);

  // Select and insert a tag
  const selectTag = useCallback((tag: MergeTag, onInsert: (tag: MergeTag) => void) => {
    onInsert(tag);
    closeDropdown();
  }, []);

  // Close dropdown
  const closeDropdown = useCallback(() => {
    setShowDropdown(false);
    setFilteredTags([]);
    setSelectedIndex(0);
    setCurrentTrigger(null);
  }, []);

  return {
    showDropdown,
    filteredTags,
    selectedIndex,
    handleInputChange,
    handleKeyDown,
    selectTag,
    closeDropdown,
  };
};
