---
sidebar_position: 11
---

# Diferença entre Npm e Yarn

Tanto o NPM (Node Package Manager) quanto o Yarn são gerenciadores de pacotes usados para gerenciar dependências em projetos JavaScript, principalmente aqueles construídos em Node.js. Embora sirvam ao mesmo propósito, eles têm diferenças em desempenho, recursos e abordagem.

## Instalação

- **NPM:** Vem pré-instalado com o Node.js, então não é necessária nenhuma instalação adicional.
- **Yarn:** Requer uma instalação separada via NPM (npm install -g yarn) ou diretamente pelo site do Yarn.

## Velocidade

- **NPM:**
    - O NPM v5+ introduziu um arquivo de bloqueio (lock file) e algumas otimizações, mas tradicionalmente era mais lento devido a um cache menos agressivo e menos requisições de rede.
    - Com a paralelização e melhorias no NPM v7+, a velocidade está muito melhor, mas ainda um pouco atrás do Yarn em alguns casos.

- **Yarn:** 
    - O Yarn é conhecido por ser mais rápido, especialmente devido à sua resolução determinística de dependências, cache agressivo e operações paralelas.
    - Ele pode instalar pacotes mais rapidamente, especialmente em instalações repetidas, graças ao melhor gerenciamento de cache offline.


## Arquivo de Bloqueio (Lock File)

- **NPM:** Usa o package-lock.json para bloquear dependências, garantindo que as mesmas versões sejam instaladas em diferentes ambientes.
- **Yarn:** Usa o yarn.lock, que desempenha uma função similar, mas alguns argumentam que o arquivo de bloqueio do Yarn é mais legível e resolve dependências de maneira mais determinística.
Resolução de Dependências

- **NPM:**

    - O NPM v6 e versões anteriores possuíam uma estrutura de dependências aninhadas que podiam levar a problemas como o "inferno de dependências" ("dependency hell").
    - O NPM v7+ agora usa uma estrutura "plana" para o node_modules, semelhante à abordagem do Yarn, o que ajuda a evitar esses problemas.
- **Yarn:**

    - O Yarn sempre teve um sistema determinístico de resolução de dependências, o que significa que garante a mesma árvore de dependências em todas as instalações, reduzindo problemas com conflitos de módulos.


## Modo Offline

- **NPM:**
    - O NPM possui cache, mas o suporte offline não é tão robusto.
    - A partir do NPM v7+, o suporte offline melhorou, mas não é o comportamento padrão.

- **Yarn:**

    - O Yarn permite que você instale pacotes offline se já estiverem em cache, tornando-o uma solução mais robusta ao trabalhar em ambientes com acesso limitado ou sem internet.

## Suporte a Workspaces

- **NPM:**

    - Introduziu suporte a workspaces no NPM v7, permitindo que usuários gerenciem monorepos (múltiplos projetos em um único repositório) com dependências compartilhadas de forma mais eficiente.

- **Yarn:**

     - O Yarn suporta workspaces desde suas primeiras versões, e sua implementação é mais madura e amplamente utilizada para gerenciar monorepos.


## Segurança

- **NPM:** 

    - O NPM audita seus pacotes para vulnerabilidades conhecidas e exibe avisos de segurança, mas você deve executar npm audit separadamente para obter um relatório detalhado.

- **Yarn:**

    - O Yarn v2+ também fornece uma ferramenta de auditoria de segurança integrada, semelhante à do NPM. Ambas as ferramentas servem ao mesmo propósito, embora as práticas de segurança do Yarn possam parecer mais integradas.

## Comandos de CLI

- **NPM:**

Para instalar um pacote: npm install [nome-do-pacote]
Para instalação global: npm install -g [nome-do-pacote]

- **Yarn:**

Para instalar um pacote: yarn add [nome-do-pacote]
Para instalação global: yarn global add [nome-do-pacote]


## Escalabilidade e Gerenciamento de Monorepos

- **NPM:**

    - O suporte a monorepos (com workspaces) foi adicionado no NPM v7, mas ainda não é tão rico em recursos ou performático quanto o Yarn para grandes monorepos.
- **Yarn:**

    - O recurso de workspaces do Yarn há muito tempo é uma escolha favorita para gerenciar monorepos e projetos de grande escala, oferecendo mais controle e uma solução mais escalável.

## Plug'n'Play (PnP)

- **NPM:**

    - O NPM não suporta Plug'n'Play nativamente.

- **Yarn:**

    - O Yarn 2 introduziu o Plug'n'Play (PnP), que elimina completamente a necessidade da pasta node_modules. Em vez de criar essa pasta, o Yarn resolve as dependências diretamente, melhorando a velocidade e reduzindo o uso de disco. No entanto, o PnP pode introduzir problemas de compatibilidade com algumas ferramentas.

## Comunidade e Ecossistema

- **NPM:**

    - Sendo o gerenciador de pacotes padrão para o Node.js, o NPM possui o maior ecossistema de pacotes.
    - A maioria dos tutoriais, documentações e integrações de terceiros são focados no NPM.
- **Yarn:**

    - O Yarn foi desenvolvido pelo Facebook e, embora tenha uma grande comunidade, o ecossistema do NPM ainda é maior.
    - A popularidade do Yarn cresceu em comunidades específicas devido às suas vantagens de desempenho e recursos.

## Versionamento

- **NPM:**

    - Oferece um comando simples npm version para alterar versões no package.json e criar tags no Git.
    - Utiliza versionamento semântico (semver) por padrão.

- **Yarn:**

    - Também suporta versionamento semântico, e a alteração de versões funciona de forma semelhante com o comando yarn version.
    - O Yarn v2 introduziu um sistema de versionamento mais poderoso, mas que requer uma configuração manual adicional.

## Gerenciamento de Binários Globais

- **NPM:**

    - O NPM instala pacotes globais em um diretório central. É necessário adicionar esse diretório ao seu PATH para usar os binários.
- **Yarn:**

    - O Yarn instala pacotes globais em um diretório separado e os vincula automaticamente. Isso às vezes simplifica o trabalho com ferramentas instaladas globalmente.

## Migração

- **NPM:**

    - Migrar do Yarn para o NPM é simples. Você pode excluir o arquivo yarn.lock e executar npm install para gerar um arquivo package-lock.json.
- **Yarn:**

    - Migrar do NPM para o Yarn envolve instalar o Yarn e executar yarn install para gerar um arquivo yarn.lock.

## Outros Recursos Notáveis

- **NPM:**

    - Integra-se estreitamente com o registro do NPM.
    - Possui recursos integrados de auditoria e segurança.

- **Yarn:**

    - Instalação offline.
    - Zero Installs com o Yarn 2 (sua base de código contém todas as dependências).
    - Builds mais determinísticas devido ao arquivo yarn.lock.


## Creditos : [coding_comics](https://www.instagram.com/coding__comics/)