# Trabalho Final - Frontend React CRUD Produtos

Este projeto é um frontend em React (Vite) que realiza operações de CRUD (Create, Read, Update, Delete) para produtos, utilizando a API pública disponível em [http://leoproti.com.br:8004/produtos](http://leoproti.com.br:8004/produtos).

## Funcionalidades

- Listagem de produtos
- Cadastro de novo produto
- Edição de produto existente
- Exclusão de produto
- Interface moderna com Material-UI
- Controle de rotas com React Router

## Estrutura esperada do produto

```json
{
  "id": 0,
  "nome": "string",
  "preco": 0
}
```

## Tecnologias Utilizadas

- [React]
- [Vite]
- [Material-UI (MUI)]
- [React Router DOM]
- [Axios]

## Instalação do Projeto

1. Instale as dependências principais (execute na pasta do projeto):

   ```bash
   npm install
   ```

2. Se for iniciar do zero ou faltar dependências, instale:

   ```bash
   npm install react react-dom
   npm install react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled axios
   npm install --save-dev vite @vitejs/plugin-react
   ```

## Como rodar o projeto

```bash
npm run dev
```

