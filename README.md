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




