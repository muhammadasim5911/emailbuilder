import { v4 as uuidv4 } from 'uuid';
import type { EmailElement } from '../types';

/**
 * Parse HTML email template into editable elements
 */
export function parseEmailHTML(html: string): EmailElement[] {
  // Create a temporary DOM element to parse HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  const elements: EmailElement[] = [];
  
  // Find all major sections (tables with es-header, es-content, es-footer classes)
  const sections = doc.querySelectorAll('table.es-header, table.es-content, table.es-footer');
  
  if (sections.length === 0) {
    // Fallback: parse entire body
    return parseGenericHTML(doc.body);
  }
  
  sections.forEach((section) => {
    const sectionElements = parseSection(section as HTMLElement);
    elements.push(...sectionElements);
  });
  
  return elements.length > 0 ? elements : parseGenericHTML(doc.body);
}

/**
 * Parse a section (header, content, footer)
 */
function parseSection(section: HTMLElement): EmailElement[] {
  const rows: EmailElement[] = [];
  
  // Find all images in this section
  const images = section.querySelectorAll('img');
  images.forEach((img) => {
    const styles = extractInlineStyles(img);
    rows.push(createRowWithImage(img, styles));
  });
  
  // Find all text blocks (p, h1, h2, h3, etc.)
  const textElements = section.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
  const textContents: Array<{text: string, styles: any, tag: string}> = [];
  
  textElements.forEach((el) => {
    const text = el.textContent?.trim();
    if (text && text.length > 0) {
      // Skip if it's inside an anchor (button)
      const parent = el.closest('a');
      if (!parent) {
        const styles = extractInlineStyles(el as HTMLElement);
        textContents.push({ 
          text, 
          styles,
          tag: el.tagName.toLowerCase()
        });
      }
    }
  });
  
  // Find all buttons (links with button styling)
  const buttons = section.querySelectorAll('a.es-button, a[class*="button"], span.es-button-border a, a[style*="background"]');
  buttons.forEach((btn) => {
    const text = btn.textContent?.trim();
    const href = (btn as HTMLAnchorElement).href || '#';
    if (text) {
      const styles = extractInlineStyles(btn as HTMLElement);
      rows.push(createRowWithButton(text, href, styles));
    }
  });
  
  // Group text contents into a single row
  if (textContents.length > 0) {
    rows.push(createRowWithTexts(textContents));
  }
  
  return rows;
}

/**
 * Extract inline styles from element
 */
function extractInlineStyles(element: HTMLElement): any {
  const styles: any = {};
  const inlineStyle = element.getAttribute('style') || '';
  
  // Parse inline styles
  if (inlineStyle) {
    const styleRules = inlineStyle.split(';');
    styleRules.forEach(rule => {
      const [property, value] = rule.split(':').map(s => s.trim());
      if (property && value) {
        styles[property] = value;
      }
    });
  }
  
  // Extract common attributes from element
  if (element.getAttribute('align')) {
    styles.textAlign = element.getAttribute('align');
  }
  
  // Check parent td/table elements for align attribute (common in email templates)
  if (!styles.textAlign) {
    let parent = element.parentElement;
    while (parent && parent.tagName !== 'BODY') {
      if (parent.tagName === 'TD' || parent.tagName === 'TH') {
        const align = parent.getAttribute('align');
        if (align) {
          styles.textAlign = align;
          break;
        }
      }
      parent = parent.parentElement;
    }
  }
  
  // Get computed styles for important properties
  const computed = window.getComputedStyle(element);
  if (!styles.color) styles.color = computed.color;
  if (!styles['font-size']) styles.fontSize = computed.fontSize;
  if (!styles['font-family']) styles.fontFamily = computed.fontFamily;
  if (!styles['text-align'] && !styles.textAlign) styles.textAlign = computed.textAlign;
  if (!styles['background-color']) styles.backgroundColor = computed.backgroundColor;
  
  return styles;
}

/**
 * Parse generic HTML (fallback)
 */
function parseGenericHTML(body: HTMLElement): EmailElement[] {
  const rows: EmailElement[] = [];
  
  // Extract all images
  const images = body.querySelectorAll('img');
  images.forEach((img) => {
    const styles = extractInlineStyles(img);
    rows.push(createRowWithImage(img, styles));
  });
  
  // Extract all text
  const textElements = body.querySelectorAll('p, h1, h2, h3, div');
  const textData: Array<{text: string, styles: any, tag: string}> = [];
  textElements.forEach((el) => {
    const text = el.textContent?.trim();
    if (text && text.length > 10) {
      const styles = extractInlineStyles(el as HTMLElement);
      textData.push({
        text,
        styles,
        tag: el.tagName.toLowerCase()
      });
    }
  });
  
  if (textData.length > 0) {
    rows.push(createRowWithTexts(textData));
  }
  
  // Extract all links as buttons
  const links = body.querySelectorAll('a');
  links.forEach((link) => {
    const text = link.textContent?.trim();
    const href = link.href || '#';
    if (text && text.length > 0 && text.length < 50) {
      const styles = extractInlineStyles(link);
      rows.push(createRowWithButton(text, href, styles));
    }
  });
  
  return rows;
}

/**
 * Create a row with an image
 */
function createRowWithImage(img: HTMLImageElement, styles: any = {}): EmailElement {
  // Extract dimensions from attributes or styles
  let width = img.getAttribute('width') || styles.width || '100%';
  let height = img.getAttribute('height') || styles.height || 'auto';
  
  // Parse numeric values
  let numericWidth = parseInt(String(width));
  let numericHeight = parseInt(String(height));
  
  // Determine if this is a large image (banner) or small image (logo)
  // Large images (width > 200px) should be responsive (100% width, auto height)
  // Small images (logos, icons) should maintain their size but with max-width
  const isLargeImage = !isNaN(numericWidth) && numericWidth > 200;
  
  if (isLargeImage) {
    // Banner/large images: make fully responsive
    width = '100%';
    height = 'auto';
  } else {
    // Small images (logos): keep original size but ensure responsiveness
    if (!isNaN(numericWidth)) {
      width = `${numericWidth}px`;
    }
    if (!isNaN(numericHeight)) {
      height = `${numericHeight}px`;
    }
  }
  
  // Extract alignment from parent TD/TH elements (common in email templates)
  let horizontalAlign: 'left' | 'center' | 'right' = 'left';
  let parent = img.parentElement;
  while (parent && parent.tagName !== 'BODY') {
    if (parent.tagName === 'TD' || parent.tagName === 'TH') {
      const align = parent.getAttribute('align');
      if (align === 'center' || align === 'left' || align === 'right') {
        horizontalAlign = align as 'left' | 'center' | 'right';
        break;
      }
    }
    parent = parent.parentElement;
  }
  
  return {
    id: uuidv4(),
    type: 'row',
    label: 'Image Row',
    children: [
      {
        id: uuidv4(),
        type: 'column',
        label: 'Image Column',
        children: [
          {
            id: uuidv4(),
            type: 'image',
            src: img.src,
            alt: img.alt || 'Image',
            width: width,
            height: height,
            padding: { top: 0, bottom: 0, left: 0, right: 0 },
            margin: { top: 0, bottom: 0, left: 0, right: 0 },
            visible: true,
            locked: false,
          } as any,
        ],
        width: '100%',
        horizontalAlign: horizontalAlign, // Apply extracted alignment
        padding: { top: 10, right: 10, bottom: 10, left: 10 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        visible: true,
        locked: false,
      } as any,
    ],
    width: '100%',
    gap: 10,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    visible: true,
    locked: false,
  } as any;
}

/**
 * Create a row with text elements
 */
function createRowWithTexts(textData: Array<{text: string, styles: any, tag: string}>): EmailElement {
  const textElements = textData.map(({text, styles, tag}) => {
    // Parse extracted styles
    const fontSize = styles.fontSize ? parseInt(styles.fontSize) : 14;
    const color = styles.color || '#455A64';
    const textAlign = (styles.textAlign || styles['text-align'] || 'center') as 'left' | 'center' | 'right' | 'justify';
    const fontWeight = (tag === 'h1' || tag === 'h2' || tag === 'h3') ? 'bold' as const : 'normal' as const;
    
    return {
      id: uuidv4(),
      type: 'text' as const,
      content: text,
      fontSize: fontSize as any,
      fontFamily: 'Arial' as const,
      fontWeight,
      fontStyle: 'normal' as const,
      lineHeight: 1.5,
      letterSpacing: 0,
      color,
      textAlign,
      padding: { top: 10, bottom: 10, left: 20, right: 20 },
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      visible: true,
      locked: false,
    };
  });
  
  return {
    id: uuidv4(),
    type: 'row',
    label: 'Text Row',
    children: [
      {
        id: uuidv4(),
        type: 'column',
        label: 'Text Column',
        children: textElements as any[],
        width: '100%',
        padding: { top: 20, right: 20, bottom: 20, left: 20 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        visible: true,
        locked: false,
      } as any,
    ],
    width: '100%',
    gap: 10,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    visible: true,
    locked: false,
  } as any;
}

/**
 * Create a row with a button
 */
function createRowWithButton(text: string, href: string, styles: any = {}): EmailElement {
  return {
    id: uuidv4(),
    type: 'row',
    label: 'Button Row',
    children: [
      {
        id: uuidv4(),
        type: 'column',
        label: 'Button Column',
        children: [
          {
            id: uuidv4(),
            type: 'button',
            label: 'Button',
            text: text,
            link: href,
            style: 'solid' as const,
            fontSize: styles.fontSize ? parseInt(styles.fontSize) : 18,
            fontFamily: 'Arial' as const,
            fontWeight: 'normal' as const,
            color: styles.color || '#FFFFFF',
            backgroundColor: styles.background || styles['background-color'] || '#BD242B',
            borderColor: styles['border-color'] || '#BD242B',
            borderWidth: styles['border-width'] ? parseInt(styles['border-width']) : 0,
            borderRadius: styles['border-radius'] ? parseInt(styles['border-radius']) : 10,
            paddingX: 20,
            paddingY: 10,
            padding: { top: 10, bottom: 10, left: 20, right: 20 },
            margin: { top: 10, bottom: 10, left: 0, right: 0 },
            visible: true,
            locked: false,
          } as any,
        ],
        width: '100%',
        padding: { top: 20, right: 20, bottom: 20, left: 20 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        visible: true,
        locked: false,
      } as any,
    ],
    width: '100%',
    gap: 10,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    visible: true,
    locked: false,
  } as any;
}
