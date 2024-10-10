---
sidebar_position: 2
---

# Docker

## baixar o docker no wsl

1. **Atualizar o Sistema**

O primeiro passo é atualizar a lista de pacotes do Ubuntu. Para isso entre com o seguinte comando:

```bash
sudo apt update
```

2. **Instalar pré-requisitos**

Instale pacotes de pré-requisitos para permitir ao APT o uso de pacotes seguros HTTPS.

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

3. **dicionar chave GPG**

Vamos adicionar a chave para garantir a validade dos pacotes vindos do repositório do Docker.

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

4. **Adicionar o repositório Docker ao Ubuntu**

Vamos adicionar o repositório Docker as fontes de pacotes do Ubuntu.

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

5. **Atualizar a lista de pacotes**

Atualize novamente a lista dos pacotes.

```bash
sudo apt update
```

6. **Instalar o Docker**

Vamos instalar o Docker no Ubuntu.

```bash
sudo apt install docker-ce
```

7. **Verificar a instalação**

Para garantir que tudo deu certo vamos verificar se o Docker está em execução.

```bash
sudo systemctl status docker
```

```bash
docker --version
```

Por padrão o comando Docker só pode ser executado pelo usuário usando SUDO. Para facilitar o uso, vamos adicionar nosso usuário do sistema ao grupo docker, assim não precisamos usar SUDO e digitar senha as nossa execuções do comando.

```bash
sudo usermod -aG docker ${USER}
```

```bash
su - ${USER}
```

## Instalar o docker compose

1. **Criar um diretório para o Docker Compose**

Primeiro vamos criar um diretório dentro da diretório do docker, lembrando que o o diretório do docker é oculto por padrão.

```bash
mkdir -p ~/.docker/cli-plugins/
```

2. **Baixar o Docker Compose**

Baixe a versão mais recente do Compose diretamente do github.

```bash
curl -SL https://github.com/docker/compose/releases/download/v2.11.2/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
```

3. **Dar permissões de execução**

Depois de baixar vamos dar as devidas permissões para que o Docker Compose seja executável.

```bash
chmod +x ~/.docker/cli-plugins/docker-compose
```

4. **Verificar a instalação**

Para ter certeza que tudo deu certo basta entrar com o comando *docker compose version*.

```
docker compose version
```


## Criação do Docker com Symfony, React e MySQL

Para facilitar, tenha o Linux em sua máquina ou, em caso de Windows, tenha o WSL instalado.

Comece clonando o repositório:

```bash
git clone https://github.com/Pedroxbr16/docker-clinica.git
```

logo após crie um uma aplicação em react com nome de "frontend":

```bash
npx create-react-app frontend
```

e adicione o Dockerfile dentro dele

:::note
Lembre-se de alterar o email e usuário do git no Dockerfile dentro da pasta php
:::

após isso rode o docker compose:

```bash
docker-compose up --build
```

e pronto, você terá seu docker rodando

# Acessar a maquina docker:

```bash
docker-compose exec php /bin/bash
```

esse comando te dá acessa a pasta "app", tudo oque você fizer nesse ambiente ficará nessa pasta

# Criar o projeto em symfony:

```bash
symfony new my_project_directory --version="6.4.*" --webapp
```

:::note
pode alterar "my_project_directory" pelo nome que quiser
:::
:::info
A aplicação estará rodando em http://127.0.0.1:8080
:::

# Para criar entidades no banco de dados

```bash
symfony console make:entity
```
# Para criar migrações

:::info
antes de criar as migrações configure o .env e o .env.local corretamente
:::
```bash
.env:

# In all environments, the following files are loaded if they exist,
# the latter taking precedence over the former:
#
#  * .env                contains default values for the environment variables needed by the app
#  * .env.local          uncommitted file with local overrides
#  * .env.$APP_ENV       committed environment-specific defaults
#  * .env.$APP_ENV.local uncommitted environment-specific overrides
#
# Real environment variables win over .env files.
#
# DO NOT DEFINE PRODUCTION SECRETS IN THIS FILE NOR IN ANY OTHER COMMITTED FILES.
# https://symfony.com/doc/current/configuration/secrets.html
#
# Run "composer dump-env prod" to compile .env files for production use (requires symfony/flex >=1.2).
# https://symfony.com/doc/current/best_practices.html#use-environment-variables-for-infrastructure-configuration

###> symfony/framework-bundle ###
APP_ENV=dev
APP_SECRET=fe2a9652fd8f96255a9d8b5174e9da4c
###< symfony/framework-bundle ###

MESSENGER_TRANSPORT_DSN=doctrine://default


###> doctrine/doctrine-bundle ###
# Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
# IMPORTANT: You MUST configure your server version, either here or in config/packages/doctrine.yaml
#
# DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=8.0.32&charset=utf8mb4"
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=10.11.2-MariaDB&charset=utf8mb4"
 DATABASE_URL="mysql://root:secret@database:3306/symfony_docker?serverVersion=8.0"
```

```bash
.env.local:

 DATABASE_URL="mysql://root:secret@database:3306/symfony_docker?serverVersion=8.0"
```

```bash
symfony console make:migration
```

agora rode o migrate para injetar os dados no banco

```bash
symfony console make:migrations:migrate
```

# Para entrar na instância do banco de dados pelo terminal

```bash
docker-compose exec database /bin/bash
```

assim você entrará na maquina do banco de dados

agora para acessar o mysql:

```bash
mysql -u root -p symfony_docker
```
ele pedirá a senha do banco

# Comandos do mysql

```bash
show databases;
```
pra mostrar os bancos disponiveis

```bash
use symfony_docker; 
```
pra entrar no banco

```bash
show tables;
```
pra mostrar as tabelas
