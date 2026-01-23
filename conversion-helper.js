/**
 * HTML to JSX Converter Helper
 * 
 * This file contains helper functions and regex patterns
 * to convert HTML attributes to JSX format
 */

// Common HTML to JSX attribute conversions
const attributeConversions = {
  'class': 'className',
  'for': 'htmlFor',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'tabindex': 'tabIndex',
  'readonly': 'readOnly',
  'maxlength': 'maxLength',
  'colspan': 'colSpan',
  'rowspan': 'rowSpan',
};

// Self-closing tags that need to be closed in JSX
const selfClosingTags = [
  'img',
  'br',
  'hr',
  'input',
  'meta',
  'link',
  'source',
  'area',
  'base',
  'col',
  'embed',
  'param',
  'track',
  'wbr'
];

/**
 * Steps to convert HTML to JSX:
 * 
 * 1. Replace class with className
 *    Find: class="
 *    Replace: className="
 * 
 * 2. Replace stroke-width with strokeWidth (and other SVG attrs)
 *    Find: stroke-width="
 *    Replace: strokeWidth="
 *    
 *    Find: stroke-linecap="
 *    Replace: strokeLinecap="
 *    
 *    Find: stroke-linejoin="
 *    Replace: strokeLinejoin="
 * 
 * 3. Replace for with htmlFor
 *    Find: for="
 *    Replace: htmlFor="
 * 
 * 4. Self-close single tags
 *    Find: <img src="...">
 *    Replace: <img src="..." />
 *    
 *    Find: <br>
 *    Replace: <br />
 * 
 * 5. Replace apostrophes in text with &apos;
 *    Example: "don't" → "don&apos;t"
 *    Example: "it's" → "it&apos;s"
 * 
 * 6. Comment out or remove script tags
 *    Scripts should be moved to useEffect hooks
 * 
 * 7. Replace onclick with onClick, onchange with onChange, etc.
 *    Find: onclick="
 *    Replace: onClick={
 *    (Note: You'll need to refactor inline JS to proper React handlers)
 * 
 * 8. Replace href="path.html" with href="/path"
 *    Find: href="([^"]+)\.html"
 *    Replace: href="/$1"
 * 
 * 9. Add 'use client' directive if page uses:
 *    - useState, useEffect, or other hooks
 *    - Event handlers (onClick, onChange, etc.)
 *    - Browser APIs (window, document, etc.)
 */

// VS Code Find & Replace Regex Patterns
const regexPatterns = {
  // Remove .html from links
  htmlExtension: {
    find: 'href="([^"]+)\\.html"',
    replace: 'href="/$1"',
  },
  
  // Convert class to className
  classAttr: {
    find: 'class=',
    replace: 'className=',
  },
  
  // Convert SVG attributes
  svgAttrs: {
    strokeWidth: { find: 'stroke-width=', replace: 'strokeWidth=' },
    strokeLinecap: { find: 'stroke-linecap=', replace: 'strokeLinecap=' },
    strokeLinejoin: { find: 'stroke-linejoin=', replace: 'strokeLinejoin=' },
  },
  
  // Self-closing img tags
  imgTags: {
    find: '<img ([^>]+)>',
    replace: '<img $1 />',
  },
  
  // Self-closing br tags
  brTags: {
    find: '<br>',
    replace: '<br />',
  },
};

// Template for a new page
const pageTemplate = `export default function PageName() {
  return (
    <main className="bg-white">
      {/* Your converted HTML content here */}
    </main>
  );
}
`;

// Template for a page with client-side features
const clientPageTemplate = `'use client';

import { useEffect } from 'react';

export default function PageName() {
  useEffect(() => {
    // Your JavaScript logic here
  }, []);

  return (
    <main className="bg-white">
      {/* Your converted HTML content here */}
    </main>
  );
}
`;

// Export templates
module.exports = {
  attributeConversions,
  selfClosingTags,
  regexPatterns,
  pageTemplate,
  clientPageTemplate,
};
