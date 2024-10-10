---
sidebar_position: 7
---


# Comandos do Symfony

## Comandos Gerais:

**help** - Exibe ajuda para um comando.

```bash
php bin/console help [comando]
```

**list** - Lista todos os comandos disponíveis.
```bash
php bin/console list
```
-----------------
## Comandos de Cache:

**cache:clear** - Limpa o cache.

```bash
php bin/console cache:clear
```

**cache:warmup** - Preenche o cache sem executá-lo.

```bash
php bin/console cache:warmup
```

**cache:pool:clear** - Limpa um pool de cache.

```bash
php bin/console cache:pool:clear [pool-name]
```
-----------------
## Comandos de Debug:

**debug:router** - Exibe as rotas registradas.

```bash
php bin/console debug:router
```

**debug:config** - Exibe a configuração atual.

```bash
php bin/console debug:config [bundle] [opções]
```

**debug:container** - Exibe serviços e parâmetros do container.

```bash
php bin/console debug:container
```

**debug:event-dispatcher** - Lista os ouvintes de eventos registrados.

```bash
php bin/console debug:event-dispatcher
```

**debug:twig** - Exibe informações sobre templates Twig.

```bash
php bin/console debug:twig
```
-----------------
## Comandos de Doctrine(Banco de dados):

**doctrine:database:create** - Cria o banco de dados.

```bash
php bin/console doctrine:database:create
```

**doctrine:database:drop** - Remove o banco de dados.

```bash
php bin/console doctrine:database:drop --force
```

**doctrine:schema:update** - Atualiza o schema do banco de dados.

```bash
php bin/console doctrine:schema:update --force
```

**doctrine:migrations:migrate** - Executa as migrações de banco de dados.

```bash
php bin/console doctrine:migrations:migrate
```

**doctrine:fixtures:load** - Carrega dados fictícios (fixtures) no banco de dados.

```bash
php bin/console doctrine:fixtures:load
```
---------------------
## Comandos de Geração de Código:

**make:controller** - Gera um novo controlador.

```bash
php bin/console make:controller NomeDoController
```

**make:entity** - Cria uma nova entidade Doctrine.

```bash
php bin/console make:entity
```

**make:migration** - Cria um arquivo de migração.

```bash
php bin/console make:migration
```

**make:form** - Gera uma nova classe de formulário

```bash
php bin/console make:form
```

**make:user** - Cria uma nova entidade de usuário.

```bash
php bin/console make:user
```
-------------------
## Comandos de Segurança:

**security:check** - Verifica vulnerabilidades conhecidas.

```bash
php bin/console security:check
```

**user:change-password** - Altera a senha de um usuário.

```bash
php bin/console user:change-password
```

## Comandos de Rotas:

**router:match** - Combina uma rota com a URL fornecida.

```bash
php bin/console router:match /caminho-da-url
```
-------------------------
## Comandos de Sessão:

**session:invalidate** - Invalida a sessão de usuários.

```bash
php bin/console session:invalidate
```

## Comandos de Tradução:

**translation:update** - Atualiza os arquivos de tradução.

```bash
php bin/console translation:update [locale] [bundle]
```
---------------------
## Outros Comandos Úteis:

**assets:install** - Instala os assets públicos.

```bash
php bin/console assets:install
```

**server:start** - Inicia o servidor embutido do Symfony.

```bash
php bin/console server:start
```

**server:stop** - Para o servidor embutido.

```bash
php bin/console server:stop
```

**server:status** - Mostra o status do servidor.

```bash
php bin/console server:status
```
-----------------------

## Extensões Dependendo de Pacotes Instalados:

Se você tiver outros pacotes instalados, como o **Mercure**, **Messenger** ou outros bundles, poderá ter comandos adicionais, como:

- messenger:consume - Processa as filas de mensagens
- mercure:publish - Publica uma atualização em tempo real via Mercure.

Você pode sempre executar:

```bash
php bin/console list
```

Para obter uma lista completa dos comandos disponíveis no seu projeto específico.

------------------------------
## Instalação do maker

```bash
composer require symfony/maker-bundle --dev
```

