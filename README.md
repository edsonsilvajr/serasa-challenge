# Serasa Challenge

## Detalhes do projeto

Este projeto foi feito utilizando [Vite](https://vitejs.dev) visando a performance quando feita uma build de produção (por ele utilizar `esbuild` para fazer o `bundle` de módulos JS), juntamente com React + TS. (Tudo isso poderia ser contornado com Next.js que utiliza SWC - feito na linguagem `Rust`, mais sobre no [link](https://swc.rs), mas optei por manter esse desafio somente no React devido a simplicidade do mesmo).

Utilizados dentro desse projeto o pacote [Snitches](https://stitches.dev) (CSS-in-JS) também visando uma melhor performance.

## Como rodar o projeto

Para rodar o projeto localmente, basta clonar este repositório, acessar a pasta dele no seu computador e em seguida rodar no terminal: `npm install` seguido de `npm run dev`, isso irá utilizar a porta `:3000` do `localhost`, se ela estiver utilizada outra porta será selecionada.

Para rodar a versão buildada (que é a versão otimizada para esse ambiente que foi configurado): `npm run build` seguido de `npm run preview`.

# Desafio 1 - Tipografia

A Tipografia foi feita toda componentizada, dentro do arquivo [typography.ts](./src/components/atoms/typography.ts)

# Desafio 2 - Formulário

# Desafio 3 - Sugestões técnicas para site

https://atomicdesign.bradfrost.com/chapter-2/#:~:text=Atomic%20design%20is%20atoms%2C%20molecules,parts%20at%20the%20same%20time.
