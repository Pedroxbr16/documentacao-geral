---
sidebar_position: 6
---


# Instalar o MySQL e Configurar o Banco de Dados via shell do xampp

Se ainda não tiver o MySQL instalado, siga os passos abaixo:

## Passo 1: Baixe e instale o MySQL e entre no shell dele.
rode o comando pra acessar o sql

```bash
mysql -u root -p
```
**provavel que ele peça senha, normalmente o padrão é não ter então basta dar enter** 
## Passo 2: Após a instalação, abra o terminal para criar um banco de dados:

```bash
CREATE DATABASE nome_do_banco;
```

## Passo 3: Crie um usuário para o seu banco e garanta as permissões necessárias (substitua 'usuario' e 'senha' pelos valores desejados):

```bash
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'senha';
GRANT ALL PRIVILEGES ON nome_do_banco.* TO 'usuario'@'localhost';
FLUSH PRIVILEGES;
```