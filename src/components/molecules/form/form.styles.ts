import { styled } from '../../../themes/stitches.config';

const Form = styled('form', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '4px 3px 6px 0px rgba(0,0,0,0.07)',
  borderRadius: '$formRadius',
  padding: '2rem',
  gap: '12px',

  '& img': {
    width: '10rem',
  },

  '& textarea, input': {
    resize: 'vertical',
    fontSize: '$bodyM',
    lineHeight: '$bodyM',
    letterSpacing: '$regular',
    fontFamily: '$roboto',
    minHeight: '50px',
    maxHeight: '200px',
  },

  '& input, textarea': {
    padding: '12px',
    border: '1px solid',
    borderColor: '$dark-low',
    borderRadius: '0px',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
    color: '$dark-high',
  },

  '& input:focus, textarea:focus': {
    border: '1px solid $magenta',
    outlineWidth: '0',
  },
});

const FormField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignSelf: 'center',
});

const FormToastr = styled('div', {
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  userSelect: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  background: '$magenta',
  height: '100%',
  width: '100%',
  borderRadius: '15px',
  visibility: 'hidden',
  opacity: 0,
  transition: 'visibility 0.2s, opacity 0.2s linear',

  variants: {
    loading: {
      true: {
        visibility: 'visible',
        opacity: 0.8,
      },
    },
  },
});

const FormWrapper = styled('div', {
  width: '100%',
  maxWidth: '560px',
  margin: '0 auto',
});

const FieldsContainer = styled('div', {
  width: '100%',
  maxWidth: '250px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  '& input, button': {
    width: '100%',
  },
});

export { Form, FormWrapper, FieldsContainer, FormField, FormToastr };
