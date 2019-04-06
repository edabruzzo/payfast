var express = require('express');
var consign = require('consign');

module.exports = function () {

    //ATENÇÃO, PARA FUNCIONAR É NECESSÁRIO INVOCAR O CÓDIGO DO EXPRESS ATRAVÉS DE '()'
    var app = express();
    
    //invocando o consign
    consign()
     .include('routers')//injeta os roteadores no objeto app, que está sendo exportado
     .into(app);
    
    return app;
};

