import { styled } from '../../themes/stitches.config';

const Typography = styled('p', {
  color: '$dark-high',
  variants: {
    color: {
      'dark-low': {
        color: '$dark-low',
      },
      'dark-medium': {
        color: '$dark-medium',
      },
      'dark-high': {
        color: '$dark-high',
      },
      'light-solid': {
        color: '$light-solid',
      },
      'light-high': {
        color: '$light-high',
      },
      magenta: {
        color: '$magenta',
      },
    },
    selfPlacement: {
      center: {
        margin: '0 auto',
        textAlign: 'center',
      },
    },
    display: {
      conditional: {
        '@media (min-width: 640px)': {
          display: 'none',
        },
      },
    },
  },
});

const Display = styled(Typography, {
  fontWeight: '$bold',
  fontSize: '$display',
  lineHeight: '$display',
  letterSpacing: '$display',
});

const HeadingL = styled(Typography, {
  fontWeight: '$bold',
  fontSize: '$headingL',
  lineHeight: '$headingL',
  letterSpacing: '$headingL',
});

const HeadingM = styled(Typography, {
  fontWeight: '$bold',
  fontSize: '$headingM',
  lineHeight: '$headingM',
  letterSpacing: '$headingM',
});

const HeadingS = styled(Typography, {
  fontWeight: '$bold',
  fontSize: '$headingS',
  lineHeight: '$headingS',
  letterSpacing: '$headingS',
});

const HeadingXS = styled(Typography, {
  fontWeight: '$bold',
  fontSize: '$headingXS',
  lineHeight: '$headingXS',
  letterSpacing: '$regular',
});

const SubHeading = styled(Typography, {
  fontWeight: '$bold',
  fontSize: '$subheading',
  lineHeight: '$subheading',
  letterSpacing: '$regular',
});

const BodyM = styled(Typography, {
  fontSize: '$bodyM',
  lineHeight: '$bodyM',
  letterSpacing: '$regular',
  variants: {
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
  },
});

export { Display, HeadingL, HeadingM, HeadingS, HeadingXS, SubHeading, BodyM };
