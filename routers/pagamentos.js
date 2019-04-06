//este código precisa ser exportado para poder ser injetado no app
module.exports = function(app){
    
//DEFININDO ROTAS
app.get('/pagamentos', function(request, response){

	console.log('Recebida requisição de teste');
	response.send('OK');

});

}
