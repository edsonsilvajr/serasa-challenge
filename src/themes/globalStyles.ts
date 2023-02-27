import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$roboto',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflowX: 'hidden',

    width: '100%',
    minHeight: '$section',
  },
  html: {
    scrollBehavior: 'smooth',
  },

  /* width */
  '::-webkit-scrollbar': {
    width: 4,
    height: 5,
  },
  /* Track */
  '::-webkit-scrollbar-track': {
    background: '$light-high',
  },
  /* Handle */
  '::-webkit-scrollbar-thumb': {
    background: '$magenta',
  },
  /* Handle on hover */
  '::-webkit-scrollbar-thumb:hover': {
    background: '$magentaHover',
  },
});

export { globalStyles };
