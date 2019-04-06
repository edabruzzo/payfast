var express = require('express');
var conexao = require('../persistencia/ConnectionFactory');
var dao = require('../persistencia/PagamentoDao');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('Recebida requisição GET');
  res.render('index', { title: 'Express' });
  response.send('OK');
});


router.post('/pagamento', function(req, res, next) {

  var pagamento = req.body;

  console.log('processando pagamento através de requisição POST ...');
  console.log('***********************************');
  console.log('DADOS RECEBIDOS: '+req.body);
  console.log('***********************************');

  var connection = new conexao.ConnectionFactory().createDBConnection();

  if(connection){

      var pagamentoDao = new dao.PagamentoDao(connection);

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

module.exports = router;