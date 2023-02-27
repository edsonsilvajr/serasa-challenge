import { styled } from '../../../themes/stitches.config';
const SuggestionsWrapper = styled('section', {
  opacity: 0,
  transform: 'translateX(-8rem)',
  transition: 'opacity 0.8s, transform 0.8s',
  variants: {
    isVisible: {
      true: {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
  },
});
export { SuggestionsWrapper };
