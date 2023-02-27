import { styled } from '../../themes/stitches.config';

const Button = styled('button', {
  borderRadius: '$buttonRadius',
  padding: '1rem 3rem',
  fontSize: '$bodyM',
  fontWeight: '$bold',
  textDecoration: 'none',
  transition: '0.1s linear',

  '&:hover': {
    cursor: 'pointer',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$magenta',
        borderColor: '$magenta',
        borderWidth: '0',
        borderStyle: 'solid',
        color: '$light-solid',

        '&:hover': {
          opacity: '0.8',
        },
      },
      secondary: {
        backgroundColor: '$backgroundAccent',
        border: 'none',
        color: '$textPrimary',

        '&:hover': {
          backgroundColor: '$backgroundSecondary',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

export { Button };
