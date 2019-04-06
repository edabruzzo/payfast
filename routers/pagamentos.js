var api = require('../api');

//este código precisa ser exportado para poder ser injetado no app
module.exports = function (app) {

    //DEFININDO ROTAS
    app.route('/pagamentos')
        .get(api.listaPagamentos);



    app.post("/pagamentos/pagamento", function (req, res) {
        var pagamento = req.body;
        console.log('processando pagamento através de requisição POST ...');

        var connection = new ConnectionFactory().createDBConnection();
     
        if(connection){

            var pagamentoDao = new app.persistencia.PagamentoDao(connection);

            pagamento.status = "CRIADO";
            pagamento.data = new Date();
    
            pagamentoDao.salva(pagamento, function (exception, result) {
                console.log('pagamento criado: ' + result);
                res.json(pagamento);
            });
            
        }else{
            console.log('Não há uma conexão ativa com o banco');
        }
    
    });

}