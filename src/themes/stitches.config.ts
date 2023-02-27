import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  theme: {
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1280px)',
    },
    colors: {
      'dark-low': 'rgba(0,0,0,0.44)',
      'dark-medium': 'rgba(0,0,0,0.60)',
      'dark-high': 'rgba(0,0,0,0.80)',
      'light-solid': '#FFFFFF',
      'light-high': 'rgba(255,255,255,0.80)',
      magenta: '#E63888',
      magentaHover: 'rgba(230, 56, 136, 0.9)',
    },
    fontSizes: {
      display: '3rem',
      headingL: '2.5rem',
      headingM: '2rem',
      headingS: '1.5rem',
      headingXS: '1.25rem',
      subheading: '1rem',
      bodyM: '1rem',
    },
    fonts: {
      roboto: 'Roboto, sans-serif',
    },
    lineHeights: {
      display: '52px',
      headingL: '44px',
      headingM: '36px',
      headingS: '28px',
      headingXS: '24px',
      subheading: '20px',
      bodyM: '24px',
    },
    letterSpacings: {
      display: '-1.2px',
      headingL: '-1px',
      headingM: '-0.8px',
      headingS: '-0.6px',
      regular: '0px',
    },
    fontWeights: {
      bold: 700,
      regular: 400,
    },
    sizes: {
      section: '100vh',
    },
    radii: {
      buttonRadius: '0.5rem',
      formRadius: '1rem',
    },
  },
});
