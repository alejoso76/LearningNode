var http = require('http'); //Importa el modulo

//Crea un objeto de servidor
http.createServer(function(req, res){
    res.write('Hello world'); //Escrba una respuesta al cliente
    res.end(); //FInaliza la respuesta
}).listen(8080); //EL objeto escucha en el puerto 8080