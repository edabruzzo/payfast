//OPA ESTE ARQUIVO NÃO ESTÁ EM ES6, MAS EM ECMA2015
//PASSAR O PROJETO PARA ES6



//Este cara é um construtor
function PagamentoDao(connection) {
    this._connection = connection;
  }

  PagamentoDao.prototype.salva = function(pagamento,callback) {

      this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
  }

  PagamentoDao.prototype.lista = function(callback) {
      this._connection.query('select * from pagamentos',callback);
  }

  PagamentoDao.prototype.buscaPorId = function (id,callback) {
      this._connection.query("select * from pagamentos where id = ?",[id],callback);
  }

  module.exports = function(){
      return PagamentoDao;
  };
