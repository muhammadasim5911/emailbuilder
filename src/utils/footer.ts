import { v4 as uuidv4 } from 'uuid';

const PUBLIC_CIRCLES_LOGO_URL = 'https://publiccircles-template-thumbnails.s3.ca-central-1.amazonaws.com/public-circle-assets/logo.png';

/**
 * Creates a single responsive footer row for the email template.
 * The footer uses both a media query and a data-attribute selector to hide the dot separator on mobile.
 * - Media query: Works in actual email clients
 * - Data attribute: Works in editor preview mode
 * All footer elements are locked and completely non-interactive.
 */
export const createFooterRowsJson = (showPoweredBy: boolean, includeUnsubscribe: boolean) => {
  const rows: any[] = [];

  // Build responsive footer HTML with inline media query AND data-device-mode selector
  let footerHtmlContent = `
    <style>
      /* Hide dot separator on actual mobile devices viewing the email */
      @media only screen and (max-width: 480px) {
        .footer-dot-separator {
          display: none !important;
        }
        .footer-content-wrapper {
          flex-direction: column !important;
          gap: 4px !important;
        }
      }
      /* Hide dot separator in editor mobile preview mode */
      .email-canvas-content[data-device-mode="mobile"] .footer-dot-separator {
        display: none !important;
      }
      .email-canvas-content[data-device-mode="mobile"] .footer-content-wrapper {
        flex-direction: column !important;
        gap: 4px !important;
      }
    </style>
    <div class="footer-content-wrapper" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 6px; text-align: center; line-height: 1.5; font-size: 14px; padding: 10px; background-color: black; color: #ffffff; font-family: 'Cabin', sans-serif;">
  `;

  if (showPoweredBy) {
    footerHtmlContent += `
      <span class="footer-poweredby" style="display: inline-flex; align-items: center; white-space: nowrap;">
        <span>Powered by</span>
        <a href="https://publiccircles.com" target="_blank" style="pointer-events: auto; display: inline-flex; align-items: center; text-decoration: none; margin-left: 4px;">
          <img src="${PUBLIC_CIRCLES_LOGO_URL}" alt="Public Circles" style="height: 16px; vertical-align: middle;">
        </a>
      </span>
    `;
  }

  if (showPoweredBy && includeUnsubscribe) {
    footerHtmlContent += `
      <span class="footer-dot-separator" style="display: inline-flex; justify-content: center; align-items: center; background-color: transparent; color: #ffffff; width: 20px; height: 20px; white-space: nowrap;">•</span>
    `;
  }

  if (includeUnsubscribe) {
    footerHtmlContent += `
      <span style="white-space: nowrap; color: #ffffff;">
        <a href="{{unsubscribe}}" style="color: #ffffff; text-decoration: underline; pointer-events: auto;">Unsubscribe</a>
        <span> from Emails</span>
      </span>
    `;
  }

  footerHtmlContent += `</div>`;

  if ((showPoweredBy || includeUnsubscribe)) {
    const footerRow = {
      id: uuidv4(),
      type: 'row',
      label: 'Footer',
      cells: [1],
      children: [
        {
          id: uuidv4(),
          type: 'column',
          label: 'Footer Column',
          children: [
            {
              id: uuidv4(),
              type: 'html',
              label: 'Footer Content',
              content: footerHtmlContent,
              visible: true,
              locked: true,
              // Completely disable all interactions
              selectable: false,
              draggable: false,
              duplicatable: false,
              deletable: false,
              hideable: false,
              clickable: false,
            },
          ],
          width: '100%',
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
          visible: true,
          locked: true,
          selectable: false,
          draggable: false,
          duplicatable: false,
          deletable: false,
          hideable: false,
          clickable: false,
        },
      ],
      width: '100%',
      gap: 0,
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      visible: true,
      locked: true,
      // Footer row is completely non-interactive
      selectable: false,
      draggable: false,
      duplicatable: false,
      deletable: false,
      hideable: false,
      clickable: false,
      _isFooter: true, // Internal marker to identify footer rows
    };
    rows.push(footerRow);
  }
  
  return rows;
};

/**
 * Removes existing footer rows from an elements array
 */
export const removeFooterRows = (elements: any[]): any[] => {
  return elements.filter(el => !el._isFooter);
};

/**
 * Injects footer rows at the end of elements array, removing any existing footer first
 */
export const injectFooterRows = (
  elements: any[],
  showPoweredBy: boolean,
  includeUnsubscribe: boolean
): any[] => {
  // Remove existing footer rows
  const cleanElements = removeFooterRows(elements);
  
  // Generate new footer rows
  const footerRows = createFooterRowsJson(showPoweredBy, includeUnsubscribe);
  
  // Append footer rows at the end
  return [...cleanElements, ...footerRows];
};
