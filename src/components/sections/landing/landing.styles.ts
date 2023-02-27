import { styled } from '../../../themes/stitches.config';
const LandingWrapper = styled('section', {
  justifyContent: 'unset',

  opacity: 0,
  transform: 'translateX(-8rem)',
  transition: 'opacity 0.8s, transform 0.8s',

  textAlign: 'center',
  placeContent: 'center',

  variants: {
    isVisible: {
      true: {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
  },
});
export { LandingWrapper };
