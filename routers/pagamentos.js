//este código precisa ser exportado para poder ser injetado no app
module.exports = function(app){
    
//DEFININDO ROTAS
app.get('/pagamentos', function(request, response){

	console.log('Recebida requisição GET');
	response.send('OK');

});


//DEFININDO ROTAS
app.post('/pagamentos/pagamento', function(request, response){

	console.log('Recebida requisição de POST');

    //O recurso chega no post no corpo da requisição
    var pagamento = request.body;
    console.log(pagamento);
//    response.send(JSON.stringify(pagamento));

});


}
