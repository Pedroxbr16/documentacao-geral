---
sidebar_position: 6
---

# Instalação do pyenv no linux

primeiro instale as bibliotecas nescessárias

```bash
sudo apt-get install -y build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev 
libsqlite3-dev wget curl llvm gettext libncurses5-dev tk-dev tcl-dev blt-dev libgdbm-dev
git python-dev python3-dev aria2 vim libnss3-tools python3-venv liblzma-dev libpq-dev
```

agore instale o pyenv

```bash
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
```
Caso tenha problemas na instalação por conte de firewall e erros como SSL_connect use:

```bash
wget https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer -O pyenv-installer
bash pyenv-installer
```


agora configure a variavel de ambiente 

rode:

```bash
echo $SHELL
```

Exemplo de saída foi: /bin/bash. <br />
Com um editor de texto de sua preferência, abra o arquivo .bashrc e cole os comandos abaixo:
eu costumo usar o nano
```bash
nano ~/.bashrc
```

cole isso na ultima linha.

```bash
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"

if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init --path)"
fi

```

ctrl + o e enter pra salvar e ctrl + x pra sair

apos isso rode :

```bash
source ~/.bashrc
```

agora verifique se a instalação foi concluida

```bash
pyenv --version
```

depois basta instalar uma versão do python

```bash
pyenv install -l
```

para listar as versões

```bash
pyenv install <versão>
```

pra instalar uma específica