---
sidebar_position: 3
---

# Node.js via nvm

1. **Baixe e instale o script do NVM**

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
(A versão pode ser diferente, então fique atento para mudar o número da versão, se necessário.)

2. **Atualize as variáveis de ambiente** para que o NVM seja reconhecido. 
Adicione as seguintes linhas ao final do seu arquivo `~/.bashrc` (ou `~/.zshrc`, se estiver usando `zsh`):

```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bashrc
```

3. **Recarregue seu terminal** ou execute o seguinte comando para aplicar as mudanças:

```bash
source ~/.bashrc
```

4. **Verifique se o NVM foi instalado corretamente** rodando:

```
nvm --version
```

5. **Instale a versão do Node.js que você deseja** com o comando:

```bash
nvm install <versão>
```