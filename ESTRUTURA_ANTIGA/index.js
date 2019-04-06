
//ATENÇÃO, PARA FUNCIONAR O REQUIRE É NECESSÁRIO INVOCAR O CÓDIGO ATRAVÉS DE '()'
var app = require('./config/custom_express')();

app.listen(3000, function(){

	console.log('Servidor iniciado e rodando na porta 3000');

} );