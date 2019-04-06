var http = require('http')
    ,app = require('./config/custom_express');

http.createServer(app).listen(3000, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
});

