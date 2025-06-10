---
sidebar_position: 1
---

# Instalação do Ubuntu (WSL)

:::info
💡 Se preferir, você pode simplesmente baixar o WSL pela Microsoft Store.
:::

## 1. Ativando o Hyper-V

Antes de instalar o WSL, é necessário ativar o **Hyper-V**:

1. Acesse o **Painel de Controle**.
2. Clique em **Programas** > **Programas e Recursos**.
3. Clique em **Ativar ou desativar recursos do Windows**.
4. Marque a opção **Hyper-V**.
5. Clique em **OK** e aguarde a conclusão.

---

## 2. Habilitar o WSL e a Plataforma de Máquina Virtual

Abra o **PowerShell como administrador** e execute os comandos abaixo:

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
> Habilita o subsistema Linux no Windows.

```bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
> Habilita a plataforma de máquina virtual necessária para o WSL 2.

🔁 **Reinicie o computador** após esses comandos.

---

## 3. Definindo o WSL 2 como padrão

Após reiniciar, abra o PowerShell como administrador novamente:

```bash
wsl --set-default-version 2
```

Se for solicitado a atualização do kernel, baixe e instale a partir do link oficial:

🔗 [Baixar atualização do kernel WSL](https://learn.microsoft.com/pt-br/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)

---

## 4. Instalar uma distribuição Linux

Abra a **Microsoft Store**, procure por uma distribuição e instale. Recomendamos:

> **Ubuntu 20.04.6 LTS**

---

## 5. Verificar e configurar a versão da distro

Após a instalação, execute:

```bash
wsl -l -v
```

Se a versão da sua distribuição estiver como `1`, atualize para a versão `2` com:

```bash
wsl --set-version Ubuntu-20.04 2
```

:::info
🔁 Substitua `Ubuntu-20.04` pelo nome exato da distribuição listada no comando anterior.
:::

---

## 6. Acessando os arquivos do Ubuntu via Explorer

Dentro da distribuição Linux (terminal do Ubuntu):

```bash
cd
explorer.exe .
```

O gerenciador de arquivos do Windows será aberto no diretório raiz da sua distro.

---

# Banco de Dados no WSL

---

## MySQL

### 1. Atualizar pacotes

```bash
sudo apt update && sudo apt upgrade -y
```

### 2. Instalar MySQL Server

```bash
sudo apt install mysql-server -y
```

### 3. Iniciar o MySQL

```bash
sudo service mysql start
```

✅ Verificar status:

```bash
sudo service mysql status
```

### 4. Acessar o MySQL como root

```bash
sudo mysql
```

Para definir uma nova senha:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha_aqui';
FLUSH PRIVILEGES;
EXIT;
```

---

## phpMyAdmin com Apache

### 1. Instalar Apache

```bash
sudo apt install apache2 -y
```

### 2. Instalar PHP

```bash
sudo apt install php libapache2-mod-php php-mysql -y
```

### 3. Instalar phpMyAdmin

```bash
sudo apt install phpmyadmin -y
```

Durante a instalação:
- Marque o **Apache2** (tecla **Espaço** para selecionar, depois **Enter**).
- Escolha **Sim** para configurar com `dbconfig-common`.
- Defina uma senha para o phpMyAdmin ou deixe em branco para gerar automaticamente.

❗ Se não aparecerem essas opções, reinstale com:

```bash
sudo apt purge phpmyadmin -y
sudo apt install phpmyadmin -y
```

### 4. Ativar configuração no Apache

Se necessário:

```bash
sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf
sudo a2enconf phpmyadmin
sudo systemctl reload apache2
```

### 5. Reiniciar Apache

```bash
sudo service apache2 restart
```

### 6. Acessar o phpMyAdmin

Abra no navegador:

```
http://localhost/phpmyadmin
```

---

## MongoDB

### 1. Instalar o MongoDB

```bash
sudo apt update
sudo apt install -y mongodb
```

⚠️ Em algumas distros, use:

```bash
sudo apt install -y mongodb-server
```

### 2. Iniciar o serviço

```bash
sudo service mongodb start
```

### 3. Testar acesso

```bash
mongo
```

Se aparecer o prompt `>`, o Mongo está rodando.

---

## Mongo Express

### 1. Instalar Node.js e npm

```bash
sudo apt install -y nodejs npm
```

### 2. Instalar o Mongo Express globalmente

```bash
sudo npm install -g mongo-express
```

### 3. Criar arquivo de configuração

```bash
nano mongo-express-config.json
```

Cole o seguinte conteúdo:

```json
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

### 4. Rodar o Mongo Express

```bash
mongo-express -c mongo-express-config.json
```

Acesse no navegador:

```
http://localhost:8081
```

---
