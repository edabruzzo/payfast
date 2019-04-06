APRENDENDO EXPRESS

https://expressjs.com/en/starter/generator.html

$npm install express-generator -g

$express --view=pug myapp

Then install dependencies:
$ cd myapp
$ npm install



INSTRUÇÕES PARA CRIAÇÃO DO PROJETO

mkdir payfast

SERIA BOM JÁ CRIAR O REPOSITÓRIO GIT ANTES DA INICIALIZAÇÃO DO PROJETO NODE, POIS O NPM JÁ RECONHECE O REPOSITÓRIO GIT

git init

git remote add origin https://github.com/edabruzzo/xxxxxxxx.git

npm init

confirmar prompts

npm install --save express

criar arquivo index.js na raiz do projeto 


-------------------------------------------------------------------

CONFIGURAÇÃO BÁSICA DO INDEX.js (ISTO JÁ É SUFICIENTE PARA LEVANTAR O SERVIDOR):

var express = require('express');
var app = express();
app.listen(3000, function(){

	console.log('Servidor iniciado e rodando na porta 3000');

} );


//DEFININDO ROTAS
app.get('/teste', function(request, response){

	console.log('Recebida requisição de teste');
	response.send('OK');

});

------------------------------------------------------------------

instalar o nodemon para atualização automática do projeto sem necessidade de reinicialização do node

npm install -g nodemon


inicializar o projeto

nodemon index.js

configurar no package.json inicialização pelo npm através do script start

https://docs.npmjs.com/misc/scripts

"scripts":{
		"start": "nodemon index.js",
		"test": "xxxxxxxxxx"

}


inicializar pelo npm 

npm start


DEFINIÇÃO DE ROTAS E SEPARAÇÃO DA CONFIGURAÇÃO DO EXPRESS ATRAVÉS DE MODULARIZAÇÃO

Criar uma pasta ./config na raiz do projeto e nela o arquivo para configuração do express 'custom_express.js'

Criar uma pasta para gerenciamento de rotas './routers' na raiz do projeto

EXPORTAÇÃO DE MÓDULO E IMPORTAÇÃO:

Criar o arquivo  './config/custom_express.js'

var express = require('express');

//PARTE DO CÓDIGO QUE SERÁ EXPORTADA (VARIÁVEL APP)
module.exports = function(){

	//CODIGO A SER EXPORTADO EXEMPLO
	//invocação do código de express através de '()';
	var app = express();
	return app;

}


importando o módulo criado acima no arquivo './config/custom_express.js'

PARA IMPORTAR O MÓDULO EXPORTADO BASTA USAR O REQUIRE E INVOCAR O CÓDIGO ATRAVÉS DE '()'
var app =  require('./config/custom_express')();



CRIAR BANCO DE DADOS:

1. Ir até o diretório de instalação do MySQL Server 5.7, na pasta bin
2. Digitar o comando : 

mysql -u root -p

3. Após abrir o prompt do mysql digitar o comando:

CREATE DATABASE payfast;

USE payfast;

4. EXECUTAR O SCRIPT DE CRIAÇÃO DO BANCO DE DADOS 

CREATE TABLE `pagamentos` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `forma_de_pagamento` varchar(255) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `moeda` varchar(3) NOT NULL,
  `status` varchar(255) NOT NULL,
  `data` DATE,
  `descricao` text,
   PRIMARY KEY (id)
  );


5. Na raiz do projeto payfast executar o comando : 

npm install mysql --save

