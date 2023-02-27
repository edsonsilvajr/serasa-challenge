# Serasa Challenge

## Detalhes do projeto

Este projeto foi feito utilizando [Vite](https://vitejs.dev) visando a performance quando feita uma build de produção (por ele utilizar `esbuild` para fazer o `bundle` de módulos JS), juntamente com React + TS. (Tudo isso poderia ser contornado com Next.js que utiliza SWC - feito na linguagem `Rust`, mais sobre no [link](https://swc.rs), mas optei por manter esse desafio somente no React devido a simplicidade do mesmo).

Utilizados dentro desse projeto o pacote [Snitches](https://stitches.dev) (CSS-in-JS) também visando uma melhor performance.

Outra biblioteca que foi utilizada também foi [React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer) que detecta quando um elemento se encontra na `viewport`, foi utilizado para gerar animações quando uma seção é visualizada, mas nenhum componente é de terceiros, todos os componentes foram feitos "a mão".

## Como rodar o projeto

Para rodar o projeto localmente, basta clonar este repositório, acessar a pasta dele no seu computador e em seguida rodar no terminal: `npm install` seguido de `npm run dev`, isso irá utilizar a porta `:3000` do `localhost`, se ela estiver utilizada outra porta será selecionada.

Para rodar a versão buildada (que é a versão otimizada para esse ambiente que foi configurado): `npm run build` seguido de `npm run preview`.

Caso seja do interesse de quem está analisando esse repositório, esta página está disponível em: https://serasa-challenge.netlify.app

# Desafio 1 - Tipografia

A Tipografia foi feita toda componentizada, dentro do arquivo [typography.ts](./src/components/atoms/typography.ts), foi criado um componente estilizado para cada tipo de grafia que foi apresentada no desafio, este arquivo exporta o `Display | HeadingL | HeadingM | HeadingS | HeadingXS | SubHeading | BodyM` podendo utilizá-los da seguinte forma: `<Display color='cor' selfPlacement='center' display='conditional'> CONTEÚDO <Display>`

Todos os componentes de tipografia possuem essas 3 opções, a cor podendo ser uma das definidas no desafio: `dark-low | dark-medium | dark-high | magenta | light-high | light-solid`, o `selfPlacement` é utilizado para centralizar o próprio elemento, setando `selfPlacement='center'` e o `display='conditional'` serve para fazer com que o componente só exista quando o display for menor que 640px (utilizado para o menu hamburguer feito para a responsividade)

Neste desafio eu tomei a liberdade para criar uma landing page simples, para apresentar a tipografia:
![image](https://user-images.githubusercontent.com/7295375/221479642-5dbcaafe-8d74-472e-b52d-1d76596f2bfd.png)


# Desafio 2 - Formulário

O formulário foi feito se utilizando dos componentes feitos no desafio 1, ele se encontra no arquivo [form.tsx](./src/components/molecules/form/form.tsx).

Acredito que as maiores dificuldades do formulário foi fazer o componente de estrelas e também a tela enquanto o front aguarda a resposta feita na requisição (é uma promise que retorna uma mensagem, não tem nenhuma funcionalidade em si, somente para simular o carregamento existente em uma requisição real a uma API).

![image](https://user-images.githubusercontent.com/7295375/221479271-47cdda4a-7add-41b0-ab94-b608517c9e1f.png)

Possuem os campos de nome (com input) e comentário (textarea) e um botão para enviar, quando apertado o formulário é coberto por um overlay da cor magenta, com a seguinte frase:


![image](https://user-images.githubusercontent.com/7295375/221479421-db1716ec-6a60-4005-a207-3a617be9b09f.png)


E quando terminada a requisição, a seguinte mensagem é apresentada:
![image](https://user-images.githubusercontent.com/7295375/221479485-68daa619-e64e-4a4f-ba4c-b785faa6f967.png)

Quando finalizado, os campos são resetados.


# Desafio 3 - Sugestões técnicas para site

Sobre sugestões tecnicas para o site, normalmente utilizo o [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) para sugestões sobre o que melhorar, não tenho dúvidas de que o código presente na Serasa é bem estruturado, vindo de um time tão grande e de uma empresa tão conhecida.

Uma estrutura que estou gostando de utilizar em projetos pessoais e vejo que poderia ser aplicado até mesmo no aplicativo do Serasa seria o [ADM](https://atomicdesign.bradfrost.com/chapter-2/#:~:text=Atomic%20design%20is%20atoms%2C%20molecules,parts%20at%20the%20same%20time.) (Atomic Design Methodology) que consiste em ver o sistema literalmente como átomos, moléculas, organismos e páginas, tentei utilizar para este desafio também, a ideia dessa metodologia é bem simples:

- Átomos: Elementos únicos e que não podem ser quebrados em algo menor, como um botão por exemplo, ou até mesmo uma label.
- Moléculas: Conjunto de átomos, por exemplo um formulário (aplicado neste desafio)

Não vou me aprofundar tanto na metodologia pois, como dito acima, não tenho dúvidas que o código já seja bem estruturado.

Algumas sugestões que vieram direto do Lighthouse são:

- `Serve images in next-gen formats`: Utilizar WebP e AVIF ao invés de PNG/JPG, o que acelera os downloads e diminui o consumo de dados
- `Properly size images`: uma sugestão presente nos logs é referente justamente à algo presente no next, que seria o uso de `next/image` para setar a propriedade `sizes`, o que também melhora o tempo de carregamento

Entre outras sugestões que são geradas pelo aplicativo da Google, é bem interessante e vale a pena utilizá-lo.

# Extras

Foram feitos alguns componentes a mais que achei que complementariam bem o desafio, uma navbar no topo da página, na qual é possível navegar entre as duas seções da pagina (utilizando anchor para movimentar na tela) e a tela `landing` page, que foi feita somente para mostrar todos os tipos de grafia junto com as cores presentes no sistema.

A responsividade também foi tratada, essa navbar é alterada quando < 640px: 
![image](https://user-images.githubusercontent.com/7295375/221480337-e84b4d1e-7245-459e-a405-9af4327bebc5.png)


E ao menu ser pressionado: 

![image](https://user-images.githubusercontent.com/7295375/221480385-e513e4ab-79bd-4f9a-9323-2a604589b806.png)


# Projetos e Artigos

- SOS Pandemia: [Sicite](http://seisicite2020.td.utfpr.edu.br/node/4849) | [Entrevista](https://arede.info/ao-vivo/322497/utfpr-desenvolve-sistema-sos-pandemia?d=1)

# Feedback

Acredito que a parte da tipografia é um pouco confusa...não pela tarefa em si, mas pelo que ela seria utilizada, ela é mais um complemento para o formulário na parte 2, ela por si só não é possível apresentar, que foi o caso para mim, eu fiz uma landing page apresentando essa tipografia e suas cores, tentando ser um pouco criativo, mas não é nada demais assim, as regras de tamanho e tudo mais são bem definidos, acredito que foi a única coisa que eu tive dúvidas durante o desenvolvimento desse desafio.


### DISCLAIMER

As imagens utilizadas não são de minha posse, toda utilização foi feita somente para o desafio referente à vaga de frontend, sem nenhuma intenção de obtenção de valor comercial, visto que estas imagens não são do meu pertence.
