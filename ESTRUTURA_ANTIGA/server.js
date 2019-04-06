const express = require('express')
const app = express()
const port = 3000



app.get('/pagamentos', (req, res) => {
    
    console.log('Recebida requisição GET')
    response.send('OK');
           
});




app.post('/pagamentos/pagamento', (req, res) => {
    
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
           



app.listen(port, () => console.log(`Example app listening on port ${port}!`));