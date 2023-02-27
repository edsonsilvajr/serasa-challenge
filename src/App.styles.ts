import { styled } from './themes/stitches.config';

const AppWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 1rem',
  background:
    'linear-gradient(0deg, rgba(255,255,255,1) 45%, rgba(230,56,136,1) 100%, rgba(230,56,136,1) 100%)',
});

export { AppWrapper };
