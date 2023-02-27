import { SerasaForm } from '../../molecules/form/form';
import { SuggestionsWrapper } from './suggestions.styles';
import { useInView } from 'react-intersection-observer';

const Suggestions = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <SuggestionsWrapper id='rating' ref={ref} isVisible={inView}>
      <SerasaForm />;
    </SuggestionsWrapper>
  );
};

export default Suggestions;
