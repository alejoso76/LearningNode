var http = requiere ('http');
//Leer, crear, actualizar, borrrar, renombrar archivos
var fs = require ('fs');

http.createServer (function(req, res){
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        red.end();
    })
}).listen(8080);

