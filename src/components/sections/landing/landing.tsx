import {
  BodyM,
  Display,
  HeadingL,
  HeadingM,
  HeadingS,
  HeadingXS,
  SubHeading,
} from '../../atoms/typography';
import { LandingWrapper } from './landing.styles';
import { useInView } from 'react-intersection-observer';

const Landing = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <LandingWrapper id='typography' ref={ref} isVisible={inView}>
      <div className='sla'>
        <Display as='h1' color='light-solid'>
          This is a simple landing page (Display)
        </Display>
        <HeadingL as='h2' color='light-high'>
          Created to display (HeadingL)
        </HeadingL>
        <HeadingM as='h3' color='dark-low'>
          All of (HeadingM)
        </HeadingM>
        <HeadingS as='h4' color='dark-medium'>
          Exercise 1 (HeadingS)
        </HeadingS>
        <HeadingXS as='h5' color='dark-high'>
          Typography (HeadingXS)
        </HeadingXS>
        <SubHeading as='h6' color='magenta'>
          and Colors (Subheading)
        </SubHeading>
        <BodyM>Made by:</BodyM>
        <BodyM weight='bold'>Edson Luiz da Silva Junior</BodyM>
      </div>
    </LandingWrapper>
  );
};

export default Landing;
