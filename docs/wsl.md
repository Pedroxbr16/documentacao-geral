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


