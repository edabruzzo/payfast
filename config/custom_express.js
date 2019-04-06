var express = require('express');
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

