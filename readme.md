# API NODE MUNDO TACI

>  Nossa plataforma de relacionamentos e treinamentos permite que o administrador consiga gerir as lojas clientes, facilitando assim o processo de vendas pela internet.trabalhamos no padrão REST, e por isso são utilizado os verbos GET, POST, PUT, PATCH e DELETE.

GET obtém informações sobre um recurso
POST cria um recurso
PUT atualiza um recurso
PATCH serve para atualizar partes de um recurso, e não o recurso todo
DELETE exclui um recurso

### Ajustes e melhorias

 [Link da aplicação:](https://computacao-em-nuvem-api.herokuapp.com/)
## 🛠 Tecnologias      
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" align="center" width="25" height="25" /> JavaScript

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" align="center" width="25" height="25" /> Node.js          

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" align="center" width="25" height="25" /> Express.js

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" align="center" width="25" height="25" /> MySQL
    
## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você tem instalado o`nodejs`.
* Você tem uma instância ativa do `mysql` com password o "black-magic" para o usuário root
* Você tem um banco com o nome `mundo_taci`

## 🚀 Instalando

Para instalar a api do mundo taci, siga estas etapas:

```sh
# create database 'mundo_taci'
mysql -u root -p
# quando solicitado no prompt digite o password black-magic
CREATE DATABASE mundo_taci;
# clonar o repositório
# via https
git clone https://github.com/peustratt/computacao-em-nuvem-prova01-api.git
# ou se preferir via ssh
git clone git@github.com:peustratt/computacao-em-nuvem-prova01-api.git
# entrar na pasta do api
cd computacao-em-nuvem-prova01-api
# instalar as dependências
npm i
# inicializar a api
npm start
```
