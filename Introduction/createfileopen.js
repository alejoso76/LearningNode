var fs = require('fs');

//Segundo argumento es para elegir la operacion-w para escribir
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});