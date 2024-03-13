const express = require('express'); // modulo que permite inicializar el servidor
const app = express(); //aqui lo ejecuta y lo guarda en una varible app

//middlewares funciones que se ejecutan antes de que llegue a la ruta
app.use(express.json()); // funcion que nos ayuda a que el servidor convierta(traduzca) json(client)  a objeto de js
app.use(express.urlencoded({extended: false})); // procesa los datos enviados desde el cliente al servidor a tra ves de formularios o peticiones post, el paramentro es false ya que solo se analizaran datos simples

// routes
app.use(require('./routes/index'));

app.listen(3000); // declaro que la app se ejecute en el puerto 3000
console.log('Server on port 3000');
