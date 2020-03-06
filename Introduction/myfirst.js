var http = require('http'); //Importa el modulo

//Crea un objeto de servidor
//*req significa request del cliente
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'}); //200 significa todo OK y objeto conteniendo headers de respuesta
    res.write('Hello world'); //Escrba una respuesta al cliente
    res.end(); //FInaliza la respuesta
}).listen(8080); //EL objeto escucha en el puerto 8080