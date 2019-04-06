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