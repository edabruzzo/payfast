/*var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');



module.exports = function () {

    //ATENÇÃO, PARA FUNCIONAR É NECESSÁRIO INVOCAR O CÓDIGO DO EXPRESS ATRAVÉS DE '()'
    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    //invocando o consign
    consign()
     .include('routers')//injeta os roteadores no objeto app, que está sendo exportado
     .then('persistencia')
     .into(app);
    
    return app;
};

*/

var express = require('express')
    ,app = express()
    ,routes = require('../routers/index')
    ,path =  require('path')
    ,bodyParser = require('body-parser');

app.set('clientPath', path.join(__dirname, '../..', 'client'));
console.log(app.get('clientPath'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


routes(app);

module.exports = app;