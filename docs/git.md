---
sidebar_position: 8
---

# Git

## instalando o git no wsl

primeiro  certifique-se que o sistema esta atualizado

```bash
sudo apt update && sudo apt upgrade -y
```

```bash
sudo apt install git -y
```
após isso confirme que foi instalado corretamenta

```bash
git --version
```


## configurando o git

pra configurar seu nome de usuario
```bash
git config --global user.name "Seu Nome"
```

para configurar seu email
```bash
git config --global user.email "seuemail@exemplo.com"
```

## Comandos de Inicialização

```bash
Git init
```

O git init inicializa um novo repositório Git no diretório atual, criando a pasta .git para controle de versão.

## Comandos pra Gerenciar Arquivos:

```
git status
```
O comando git status mostra o estado atual do repositório, incluindo:

- Arquivos modificados não preparados (unstaged).
- Arquivos prontos para commit (staged).
- Arquivos não monitorados (untracked).
- Branch ativa.
```bash
git add <nome do arquivo>
```
O comando git add "nome_do_arquivo" adiciona o arquivo especificado à área de staging (índice), preparando-o para o próximo commit.
ou
para adicionar todo os arquivos
```bash
git add .
```

```bash
git commit -m 'inicial'
```
- O comando git commit -m 'inicial' cria um commit com as alterações adicionadas ao staging e adiciona a mensagem 'inicial' para descrever o que foi feito nesse commit.<br/>
obs: o inicial pode ser alterado por qualquer coisa q queira
- O -m no comando git commit é usado para especificar uma mensagem de commit diretamente na linha de comando, sem abrir um editor de texto. A mensagem deve ser informativa sobre as alterações feitas.
- você pode fazer um commit sem usar -m. Nesse caso, ao executar git commit, o Git abrirá o editor de texto padrão (geralmente o Vim ou outro configurado) para que você insira a mensagem de commit manualmente. É obrigatório fornecer uma mensagem, seja por -m ou no editor.

```bash
git log
```
O comando git log exibe o histórico de commits do repositório, mostrando informações como autor, data e mensagens de commit em ordem cronológica reversa (do mais recente para o mais antigo).

```bash
git diff <rota do arquivo>
```

O comando git diff "rota_do_arquivo" mostra as diferenças entre o estado atual do arquivo no diretório de trabalho e a versão mais recente dele no índice (staging area). É útil para visualizar alterações não preparadas (unstaged).

## Reverter mudanças

```bash
git checkout <nome do arquivo>
```
O comando git checkout "nome_do_arquivo" restaura o estado de um arquivo para a versão mais recente confirmada no repositório (HEAD), descartando as alterações não salvas feitas no arquivo.

```bash
git reset HEAD~1
```
O comando git reset HEAD~1 desfaz o último commit, mantendo as alterações no diretório de trabalho. Em resumo, ele move o ponteiro do commit atual para o anterior, deixando os arquivos modificados prontos para serem editados ou descartados.

## Comandos branchs


```bash
git checkout -b <nome da branch>
```
O -b no comando git checkout -b "nome_da_branch" cria e muda para uma nova branch em um único passo. É uma combinação de criação (git branch) e troca de branch (git checkout).


```bash
git checkout <nome da branch>
```

O comando git checkout "nome_da_branch" é usado para trocar para uma branch existente no repositório. Ele atualiza o diretório de trabalho para refletir os arquivos e o histórico dessa branch.



```bash
git merge <nome da rota>
```

O comando git merge "nome_da_branch" combina a branch especificada "nome_da_branch" com a branch atual. Ele integra as mudanças da branch alvo ao histórico da branch onde você está trabalhando.