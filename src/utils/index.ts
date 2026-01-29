import type { EmailElement, EmailTemplate, ExportOptions } from '../types';
import { v4 as uuidv4 } from 'uuid';

/**
 * Generate unique ID
 */
export const generateId = (): string => uuidv4();

/**
 * Clone an element with a new ID
 */
export const cloneElement = (element: EmailElement): EmailElement => ({
  ...element,
  id: generateId(),
});

/**
 * Get element by ID from template
 */
export const getElementById = (
  template: EmailTemplate | null,
  id: string
): EmailElement | undefined => {
  if (!template) return undefined;
  return template.elements.find((el) => el.id === id);
};

/**
 * Deep search for element in nested structures
 */
export const findElementDeep = (
  elements: EmailElement[],
  id: string
): EmailElement | undefined => {
  for (const element of elements) {
    if (element.id === id) return element;
    
    if ('children' in element && element.children) {
      const found = findElementDeep(element.children, id);
      if (found) return found;
    }
  }
  return undefined;
};

/**
 * Find parent element of a given element ID
 */
export const findParentElement = (
  elements: EmailElement[],
  childId: string,
  parent: EmailElement | null = null
): EmailElement | null => {
  for (const element of elements) {
    // Check if this element has the child we're looking for
    if ('children' in element && element.children) {
      const hasChild = element.children.some(child => child.id === childId);
      if (hasChild) {
        return element;
      }
      
      // Recursively search in children
      const found = findParentElement(element.children, childId, element);
      if (found) return found;
    }
  }
  return null;
};


/**
 * Calculate total content height
 */
export const calculateTemplateHeight = (template: EmailTemplate | null): number => {
  if (!template) return 0;
  
  let totalHeight = 0;
  template.elements.forEach((el) => {
    if (typeof el.height === 'number') {
      totalHeight += el.height;
    } else if (el.type === 'spacer') {
      totalHeight += (el as any).height || 20;
    }
    if (el.margin) {
      totalHeight += el.margin.top + el.margin.bottom;
    }
  });
  
  return totalHeight;
};

/**
 * Validate email template
 */
export const validateTemplate = (template: EmailTemplate): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!template.name || template.name.trim().length === 0) {
    errors.push('Template name is required');
  }

  if (template.elements.length === 0) {
    errors.push('Template must contain at least one element');
  }

  if (!template.defaultTextColor || !template.defaultBackgroundColor) {
    errors.push('Default colors are required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

/**
 * Convert template to HTML
 */
export const templateToHtml = (template: EmailTemplate): string => {
  const styles = `
    <style>
      body {
        font-family: ${template.defaultFontFamily}, sans-serif;
        color: ${template.defaultTextColor};
        background-color: ${template.defaultBackgroundColor};
      }
      table {
        width: 100%;
        max-width: ${template.width}px;
        margin: 0 auto;
        border-collapse: collapse;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      a {
        color: #0ea5e9;
        text-decoration: none;
      }
      .email-container {
        width: 100%;
        max-width: ${template.width}px;
        margin: 0 auto;
      }
    </style>
  `;

  const body = template.elements
    .map((el) => elementToHtml(el))
    .join('\n');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${template.subject || template.name}</title>
      ${styles}
    </head>
    <body>
      <div class="email-container">
        ${body}
      </div>
    </body>
    </html>
  `;
};

/**
 * Convert single element to HTML
 */
export const elementToHtml = (element: EmailElement): string => {
  const baseStyle = getElementBaseStyle(element);

  switch (element.type) {
    case 'text': {
      const el = element as any;
      const textStyle = `
        ${baseStyle}
        font-size: ${el.fontSize}px;
        font-family: ${el.fontFamily}, sans-serif;
        color: ${el.color};
        text-align: ${el.textAlign};
        line-height: ${el.lineHeight};
      `;
      return `<div style="${textStyle}">${el.content}</div>`;
    }

    case 'image': {
      const el = element as any;
      const imgStyle = `
        ${baseStyle}
        max-width: 100%;
        height: auto;
      `;
      return `<img src="${el.src}" alt="${el.alt}" style="${imgStyle}" />`;
    }

    case 'button': {
      const el = element as any;
      const buttonStyle = `
        display: inline-block;
        padding: ${el.paddingY}px ${el.paddingX}px;
        background-color: ${el.backgroundColor || '#0ea5e9'};
        color: ${el.color};
        text-decoration: none;
        border-radius: ${el.borderRadius}px;
        font-size: ${el.fontSize}px;
        border: ${el.borderWidth}px solid ${el.borderColor};
        ${baseStyle}
      `;
      return `<a href="${el.link}" style="${buttonStyle}">${el.text}</a>`;
    }

    case 'divider': {
      const el = element as any;
      const dividerStyle = `
        ${baseStyle}
        border: none;
        border-top: ${el.height}px ${el.style} ${el.color};
        margin: ${el.margin?.top || 10}px 0;
      `;
      return `<hr style="${dividerStyle}" />`;
    }

    case 'spacer': {
      const el = element as any;
      return `<div style="height: ${el.height}px; ${baseStyle}"></div>`;
    }

    case 'section':
    case 'row': {
      const el = element as any;
      const children = (el.children || [])
        .map((child: EmailElement) => elementToHtml(child))
        .join('\n');
      return `<div style="${baseStyle}">${children}</div>`;
    }

    default:
      return '';
  }
};

/**
 * Get base styles for any element
 */
export const getElementBaseStyle = (element: EmailElement): string => {
  let style = '';

  if (element.backgroundColor) {
    style += `background-color: ${element.backgroundColor};`;
  }

  if (element.width) {
    style += `width: ${typeof element.width === 'number' ? element.width + 'px' : element.width};`;
  }

  if (element.height) {
    style += `height: ${typeof element.height === 'number' ? element.height + 'px' : element.height};`;
  }

  if (element.padding) {
    const { top, right, bottom, left } = element.padding;
    style += `padding: ${top}px ${right}px ${bottom}px ${left}px;`;
  }

  if (element.margin) {
    const { top, right, bottom, left } = element.margin;
    style += `margin: ${top}px ${right}px ${bottom}px ${left}px;`;
  }

  if (element.borderColor && element.borderWidth) {
    style += `border: ${element.borderWidth}px solid ${element.borderColor};`;
  }

  if (element.borderRadius) {
    style += `border-radius: ${element.borderRadius}px;`;
  }

  if (element.opacity !== undefined) {
    style += `opacity: ${element.opacity};`;
  }

  return style;
};

/**
 * Export template in specified format
 */
export const exportTemplate = (
  template: EmailTemplate,
  options: ExportOptions
): string => {
  const { format, minify = false } = options;

  switch (format) {
    case 'html':
      return minifyHtml(templateToHtml(template), minify);

    case 'json':
      return minify
        ? JSON.stringify(template)
        : JSON.stringify(template, null, 2);

    case 'mjml':
      return templateToMjml(template);

    case 'amp':
      return templateToAmp(template);

    default:
      return JSON.stringify(template);
  }
};

/**
 * Convert template to MJML format
 */
export const templateToMjml = (template: EmailTemplate): string => {
  const content = template.elements
    .map((el) => elementToMjml(el))
    .join('\n');

  return `<mjml>
    <mj-head>
      <mj-title>${template.name}</mj-title>
      <mj-preview>${template.previewText || ''}</mj-preview>
      <mj-attributes>
        <mj-all font-family="${template.defaultFontFamily}, sans-serif" />
      </mj-attributes>
    </mj-head>
    <mj-body background-color="${template.defaultBackgroundColor}">
      ${content}
    </mj-body>
  </mjml>`;
};

/**
 * Convert element to MJML
 */
export const elementToMjml = (element: EmailElement): string => {
  switch (element.type) {
    case 'text': {
      const el = element as any;
      return `<mj-section>
        <mj-column>
          <mj-text font-size="${el.fontSize}px" color="${el.color}">
            ${el.content}
          </mj-text>
        </mj-column>
      </mj-section>`;
    }

    case 'image': {
      const el = element as any;
      return `<mj-section>
        <mj-column>
          <mj-image src="${el.src}" alt="${el.alt}" />
        </mj-column>
      </mj-section>`;
    }

    case 'button': {
      const el = element as any;
      return `<mj-section>
        <mj-column>
          <mj-button href="${el.link}" background-color="${el.backgroundColor}">${el.text}</mj-button>
        </mj-column>
      </mj-section>`;
    }

    default:
      return '';
  }
};

/**
 * Convert template to AMP format
 */
export const templateToAmp = (template: EmailTemplate): string => {
  const content = template.elements
    .map((el) => elementToHtml(el))
    .join('\n');

  return `<!DOCTYPE html>
  <html ⚡4email>
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <style amp4email-boilerplate>body{visibility:hidden}</style>
  </head>
  <body>
    ${content}
  </body>
  </html>`;
};

/**
 * Minify HTML
 */
export const minifyHtml = (html: string, minify: boolean): string => {
  if (!minify) return html;
  return html
    .replace(/\s+/g, ' ')
    .replace(/>\s+</g, '><')
    .trim();
};

/**
 * Create default element with base properties
 */
export const createDefaultElement = (type: string): Partial<EmailElement> => {
  const common = {
    id: generateId(),
    label: type.charAt(0).toUpperCase() + type.slice(1),
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    visible: true,
    locked: false,
  };

  switch (type) {
    case 'heading':
      return {
        ...common,
        type: 'text',
        label: 'Heading',
        content: 'Heading Text',
        fontSize: 32,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 1.2,
        letterSpacing: 0,
        color: '#000000',
        textAlign: 'left',
      } as any;
      
    case 'text':
      return {
        ...common,
        type: 'text',
        content: 'Add text here',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: 0,
        color: '#000000',
        textAlign: 'left',
      };

    case 'image':
      return {
        ...common,
        type: 'image',
        src: 'https://cdn.tools.unlayer.com/image/placeholder.png',
        alt: 'Image',
        width: '100%',
        autoWidth: true, // Enable auto width by default for responsiveness
      };

    case 'button':
      return {
        ...common,
        type: 'button',
        text: 'Click Here',
        link: 'https://example.com',
        style: 'solid',
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: 'normal',
        color: '#ffffff',
        backgroundColor: '#0ea5e9',
        padding: { top: 5, right: 10, bottom: 5, left: 10 },
        borderRadius: 6,
        fullWidth: false,
        width: 'auto',
      };

    case 'spacer':
      return {
        ...common,
        type: 'spacer',
        height: 20,
      };

    case 'divider':
      return {
        ...common,
        type: 'divider',
        height: 1,
        color: '#e5e7eb',
        style: 'solid',
      };

    case 'section':
      return {
        ...common,
        type: 'section',
        children: [],
        width: '100%',
      };

    case 'row':
      return {
        ...common,
        type: 'row',
        children: [
            // Create default column inside row
            {
                ...createDefaultElement('column'),
                id: generateId(),
                width: '100%', // Column takes full width of row valid for single column
            } as any
        ],
        width: '100%',
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
        gap: 0,
      };

    case 'column':
      // @ts-ignore - Width type mismatch needs fixing
      return {
        ...common,
        type: 'column',
        children: [],
        width: '50%',
        padding: { top: 20, right: 20, bottom: 20, left: 20 },
      };

    default:
      return common;
  }
};

// Export HTML parser
export { parseEmailHTML } from './htmlParser';
