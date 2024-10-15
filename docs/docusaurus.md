---
sidebar_position: 4
---

# Como usar o Docusaurus?

primeiro crie a estrutura do projeto

```bash
npx create-docusaurus@latest my-website classic
```

# Como adicionar uma searchbar em seu projeto docusaurus?

o docusaurus tem o algolia, porém esse é mais simples de instalar e configurar

```bash
npm install --save @easyops-cn/docusaurus-search-local
# ou
yarn add @easyops-cn/docusaurus-search-local
```

logo após no seu docusaurus.config.js adicione a requisição 

```bash
 plugins:[
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),  
      {
        hashed: true,
     
      },
    ],
  ],
```