import { FormEvent, useRef, useState } from 'react';
import SerasaLogo from '../../../assets/images/serasa-logo-full.svg';
import { Button } from '../../atoms/button';
import StarRating from '../starRating/starRating';
import { BodyM, HeadingL, SubHeading } from '../../atoms/typography';
import {
  FieldsContainer,
  Form,
  FormField,
  FormToastr,
  FormWrapper,
} from './form.styles';
import { submitComment } from '../../../utils/fakeAPI';

const SerasaForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [toastrContent, setToastrContent] = useState('');

  const clickListener = (rating: number) => {
    setRating(rating);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    setToastrContent('Aguarde, estamos processando');
    setLoading(true);
    submitComment().then((response) => {
      setToastrContent('Obrigado por avaliar nossos serviços!');
      setTimeout(() => {
        resetForm();
        setLoading(false);
      }, 2000);
    });
  };

  const resetForm = () => {
    formRef.current?.reset();
  };

  return (
    <FormWrapper>
      <Form ref={formRef} onSubmit={submitHandler}>
        <img
          src={SerasaLogo}
          alt='Serasa-Logo'
          loading='lazy'
          height={75}
          width={160}
        ></img>
        <BodyM selfPlacement='center'>
          Conte o quanto você está satisfeito com nossos serviços
        </BodyM>
        <FieldsContainer>
          <FormField>
            <SubHeading selfPlacement='center'>
              Marque de 1 à 5 estrelas
            </SubHeading>
            <StarRating rating={rating} callback={clickListener} />
          </FormField>
          <FormField>
            <SubHeading as='label' htmlFor='name'>
              Nome
            </SubHeading>
            <input type='text' id='name' />
          </FormField>
          <FormField>
            <SubHeading as='label' htmlFor='comment'>
              Comentário(Opcional)
            </SubHeading>
            <textarea id='comment' />
          </FormField>
          <Button>Enviar Avaliação</Button>
        </FieldsContainer>
        <FormToastr loading={loading}>
          <HeadingL color='light-solid'>{toastrContent}</HeadingL>
        </FormToastr>
      </Form>
    </FormWrapper>
  );
};

export { SerasaForm };
