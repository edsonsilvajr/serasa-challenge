interface Review {
  name: string;
  comment: string;
}

const submitComment = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Obrigado por avaliar nossos serviços');
    }, 3000);
  });
};

export { submitComment };
export type { Review };
