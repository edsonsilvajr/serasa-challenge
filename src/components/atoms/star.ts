import { styled } from '../../themes/stitches.config';

const Star = styled('span', {
  fontSize: '$display',
  cursor: 'pointer',
  variants: {
    state: {
      on: {
        color: '$magenta',
      },
      off: {
        color: '$dark-low',
      },
    },
  },
});

export { Star };
