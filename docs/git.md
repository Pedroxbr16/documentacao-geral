---
sidebar_position: 8
---

# Git

## Comandos de Inicialização

```bash
Git init
```

## Comandos pra Gerenciar Arquivos:

```
git status
```

```bash
git add <nome do arquivo>
```
ou
para adicionar todo os arquivos
```bash
git add .
```

```bash
git commit -m 'inicial'
```
o inicial pode ser alterado por qualquer coisa q queira

```bash
git log
```

```bash
git diff <rota do arquivo>
```

## Reverter mudanças

```bash
git checkout <nome do arquivo>
```

```bash
git reset HEAD~1
```

## Comandos branchs

nova branch

```bash
git checkout -b <nome da branch>
```

alterar branch

```bash
git checkout <nome da branch>
```

dar merge

```bash
git merge <nome da rota>
```