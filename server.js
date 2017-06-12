var express = require('express');

var server = express();

var port = 5002;

/*server.get('/index.html',function(req, res){
    res.send()
});*/
server.use('/ascripts', express.static(__dirname + '/node_modules/angular/'));
server.use('/rscripts', express.static(__dirname + '/node_modules/angular-ui-router/'));
server.use('/tscripts', express.static(__dirname + '/node_modules/angular-touch/'));
server.use('/anscripts', express.static(__dirname + '/node_modules/angular-animate/'));
server.use('/gscripts', express.static(__dirname + '/node_modules/angular-ui-grid/'));
server.use('/bscripts', express.static(__dirname + '/node_modules/angular-ui-bootstrap/'));



server.use(express.static('cityPopulationSiteApp/public'));

server.listen( port, function(err){
    console.log("running on port" + port);
});