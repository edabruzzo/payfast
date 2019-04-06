class ConnectionFactory{

   
   constructor(){

    var mysql  = require('mysql');

   }
    

    //var password = window.confirm('Informe a senha do banco: '),
    
     //construtor da conexão
      createDBConnection(){
    
        return mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: 'root',
          database: 'payfast'
        });
      }
    
      /*
      module.exports = function() {
        return createDBConnection;
      }
*/

}
