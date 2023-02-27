import { styled } from '../../../themes/stitches.config';

const Header = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '$magenta',
  height: 'fit-content',
  alignItems: 'center',
  padding: '1rem',
  position: 'fixed',
  right: '0',
  left: '0',
  top: '0',
  zIndex: '9999',
  flexWrap: 'wrap',

  '& img': {
    height: '5rem',
    filter: 'brightness(0) invert(1)',
    '@media (min-width: 640px)': {
      flexBasis: 'auto',
    },
  },
  '@media (min-width: 640px)': {
    flexWrap: 'unset',
    padding: '1rem 5rem',
  },
});

const Links = styled('ul', {
  display: 'none',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '24px',
  '& > li, a': {
    textDecoration: 'none',
    listStyleType: 'none',
  },
  '& > li:hover, a:hover': {
    color: '$light-solid',
  },
  variants: {
    mobile: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flexGrow: 1,
        alignItems: 'center',
        marginTop: '24px',
        '@media (min-width: 640px)': {
          flexBasis: 'auto',
          flexGrow: 'unset',
          flexDirection: 'row',
          marginTop: '0',
        },
      },
    },
  },
  '@media (min-width: 640px)': {
    display: 'flex',
    flexBasis: 'auto',
    flexGrow: 'unset',
    flexDirection: 'row',
    marginTop: '0',
  },
});
export { Header, Links };
