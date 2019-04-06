//OPA ESTE ARQUIVO NÃO ESTÁ EM ES6, MAS EM ECMA2015
//PASSAR O PROJETO PARA ES6
class PagamentoDao{


constructor(connection) {
    this._connection = connection;
  
}

  salva() {

      this._connection.query('INSERT INTO pagamentos SET ?', pagamento);
  }

  lista() {
      this._connection.query('select * from pagamentos');
  }

  buscaPorId(id) {
      this._connection.query("select * from pagamentos where id = ?",[id]);
  }

  
}