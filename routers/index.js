/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

var rotas = function(app) {
    
    app.route('/pagamentos')
        .get(api.listaPagamentos);


    app.route('/pagamentos/pagamento')
        .post(api.cadastraPagamento);
        

};

module.exports  = rotas;