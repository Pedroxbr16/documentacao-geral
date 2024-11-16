---
sidebar_position: 10
---

# Configurando CORS 

## Num projeto com React e Symfony

Para configurar o CORS em um projeto com React no front-end e Symfony no back-end, você precisa permitir que o Symfony aceite requisições de origens diferentes (Cross-Origin Resource Sharing - CORS). Aqui estão os passos para configurar:

## 1. Configurar o CORS no Symfony (back-end)
Usando o pacote NelmioCorsBundle:
 ### 1. Instalar o NelmioCorsBundle: 
 Esse bundle facilita a configuração do CORS em Symfony. Você pode instalá-lo via Composer:

```bash
composer require nelmio/cors-bundle
```

### 2. Configurar o NelmioCorsBundle: 
Após a instalação, adicione a configuração do CORS no arquivo `config/packages/nelmio_cors.yaml:`

```bash
nelmio_cors:
  defaults:
    allow_origin: ['*'] # ou especifique as origens, por exemplo, ['http://localhost:3000']
    allow_methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE']
    allow_headers: ['content-type', 'authorization']
    expose_headers: []
    max_age: 3600
  paths:
    '^/api/': # Ou o caminho das rotas que devem ter o CORS habilitado
      allow_origin: ['http://localhost:3000'] # Origem do React
      allow_headers: ['content-type', 'authorization']
      allow_methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
      max_age: 3600
```
### 3. Limitar as Origens: 
Ao invés de usar `'*'` em `allow_origin`, você pode especificar a origem do seu front-end (ex: `'http://localhost:3000'` se estiver rodando o React localmente).

### 4. Limitar os Métodos:
 Ajuste os métodos permitidos conforme necessário. Se você estiver utilizando `GET`, `POST`, `PUT`, etc., deixe esses métodos configurados em `allow_methods`.

## 2. Configuração do React (front-end)
No React, você deve garantir que as requisições ao back-end incluam o CORS automaticamente. No código do React, faça as chamadas para o back-end com as opções corretas.

Se você estiver usando **fetch** ou **axios**, adicione o parâmetro `mode: 'cors'` ou use o Axios sem configuração adicional, já que ele usa CORS por padrão:

Usando `fetch:`
```bash
fetch('http://localhost:8000/api/endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
  mode: 'cors', // importante para habilitar CORS
})
```
Usando `axios:`
```bash
axios.post('http://localhost:8000/api/endpoint', data, {
  headers: {
    'Content-Type': 'application/json',
  })
```
## 3. Verificação
    - DevTools: Verifique as requisições no console do navegador (DevTools) para garantir que o cabeçalho `Access-Control-Allow-Origin` esteja presente nas respostas da API.
    - Teste no ambiente local: Execute o front-end (React) e o back-end (Symfony) e veja se o problema de CORS foi resolvido.
    - Com essas configurações, o Symfony permitirá requisições do seu front-end React.


## Configurar no Node

### 1. dentro da pasta raiz que está configurando o node rode o comando:

```bash
npm install cors
```

### 2. Importe ele no seu servidor

exemplo:
```bash
const express = require('express');
const cors = require('cors');

const app = express();

// Permitir todas as origens
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: 'CORS habilitado!' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
```

### 3. configurações especificas

```bash
const corsOptions = {
    origin: 'http://example.com', // Domínio permitido
    methods: ['GET', 'POST'],    // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

app.use(cors(corsOptions));
```

