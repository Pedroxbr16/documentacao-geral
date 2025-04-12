---
sidebar_position: 1
---

# Instalação Ubuntu(WSL)

:::info
Se preferir pode apenas baixar o Wsl pela Microsoft store.
:::
-------------------------------------
primeiro de tudo ative o hyper v

para chegar até eles siga esse passo a passo

- Navegue até o Painel de Controle.

- Selecione Programas e então Programas e Recursos.

- Selecione Ativar ou desativar recursos do Windows.

- Selecione Hyper-V e, depois selecione OK.

abra o powershell como administrador e execute os sequintes comandos

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

O comando acima habilita a feature do WSL.

```bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

O comando acima habilita a feature da plataforma de máquina virtual no sistema operacional.

após realizar esses comandos reinicie sua máquina

depois abra o powershell novamento como administrador

```bash
wsl --set-default-version 2
```

Provavel que após executar esse comando ele pedirá pra baixar a atualização do kernel
[baixe aqui](https://learn.microsoft.com/pt-br/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)

logo após instale uma distro da sua preferencia na loja da microsoft(Recomendo o Ubuntu 20.04.06 LTS)

antes de continuar verifique se está tudo certo com o wsl

```bash
wsl -l -v
```

se a "version" estiver como 1, rode o comando

```bash
wsl --set-version Ubuntu-20.04 2
```
:::info
o nome "Ubuntu-20.04" deve ser trocado pela dsitro escolhida
:::

Agora vamos acessar o explorer do windows  de "dentro" da distribuição linux escolhida

```bash
cd
explorer.exe .
```

O Explorer (gerenciador de arquivos) irá abrir direto no local onde se encontra a distribuição linux instalada anteriormente. Inserimos a pasta do Ubuntu no “Acesso Rápido” para facilitar o uso no futuro.

---------------

## Banco de dados no Wsl


##  Mysql

### 1. Atualize os pacotes
```bash
sudo apt update && sudo apt upgrade -y
```
### 2. Instale o MySql Server
```bash
sudo apt install mysql-server -y
```
### 3. Inicie o MySql
```bash
sudo service mysql start
```
✅ Você pode verificar se o serviço está rodando com:
```bash
sudo service mysql status
```
- Para acessar o mysql como root:
```bash
sudo mysql
```
- Para definir outra senha:
```bash
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha_aqui';
FLUSH PRIVILEGES;
EXIT;
```

### Instalação do apache pra gerenciar pelo phpmyadmin    

### 1. Instale o apache
```bash
sudo apt install apache2 -y
```


### 2. Instale o PHP
```bash
sudo apt install php libapache2-mod-php php-mysql -y
```


### 3. Instale o phpmyadmin
```bash
sudo apt install phpmyadmin -y
```
- Durante a instalação:
    - Escolha o servidor Apache2 (use espaço para selecionar e depois Enter).
    - Escolha Sim para configurar com dbconfig-common.
    - Coloque uma senha para o phpMyAdmin (ou deixe em branco e ele gera)

⚠️ Se você não viu essas opções, você pode reinstalar com:
```bash
sudo apt purge phpmyadmin -y
sudo apt install phpmyadmin -y
```


### 4. Ative o phpMyAdmin no Apache
- O instalador normalmente já cria um link em /etc/apache2/conf-enabled/phpmyadmin.conf, mas se não funcionar:
```bash
sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf
sudo a2enconf phpmyadmin
sudo systemctl reload apache2
```


### 5. Reinicie o apache
```bash
sudo service apache2 restart
```

### 6. Acesse pelo navegado
```bash
http://localhost/phpmyadmin
```

## MongoDB

### 1. Instalar o Mongo
```bash
sudo apt update
sudo apt install -y mongodb
```

⚠️ Em algumas distros do WSL pode estar como mongodb-server, então se der erro:
```bash
sudo apt install -y mongodb-server
```


### 2. Iniciar o Mongo
```bash
sudo service mongodb start
```


### 3. Teste
```bash
mongo
```


Se abrir o prompt > do Mongo, tá tudo certo.

### Instalar o Mongo Express

### 1. Instale Node.js e npm
```bash
sudo apt install -y nodejs npm
```


### 2. Instale o mongo express  
```bash
sudo npm install -g mongo-express
```


### 3. Criar arquivo de configuração
Crie um arquivo .json com configurações mínimas, exemplo:
```bash
nano mongo-express-config.json
```


E cole isso:
```bash
{
  "mongodb": {
    "server": "127.0.0.1",
    "port": 27017
  },
  "site": {
    "baseUrl": "/",
    "cookieKeyName": "mongo-express",
    "host": "localhost",
    "port": 8081
  },
  "useBasicAuth": false
}

```

### 5. Rode o mongo express
```bash
mongo-express -c mongo-express-config.json
```


Agora ele estará rodando em:
```bash
http://localhost:8081
```


