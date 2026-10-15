// esto es el servidor node


const express = require('express'); //importar libreria express
const path = require('path'); // modulo incluido para construir directorio de archivos

require('dotenv').config();

const pedidosRoutes = require('./routes/pedidosRoutes');


const app = express(); // creamos el server/aplicacion
app.use(express.urlencoded({ extended: true }));

app.use(pedidosRoutes);

app.use(express.static(path.join(__dirname, '../frontend')));

//solicitud de informacion desde la ruta principal
app.get('/', (req, res) => {
    res.send('hola mundo desde el backend'); // respuesta
});

//metodo post
app.post('/pedido', (req, res) => {
    const {
        nombre = '',
        correo = '',
        producto = '',
        cantidad = '1',
        tamano = '',
        observaciones = ''
    } = req.body; //conectar cada input
    const llevar = req.body.llevar ? 'Sí' : 'No';

    const parametros = new URLSearchParams({
        nombre, correo, producto, cantidad, tamano, llevar, observaciones
    });

    res.redirect('../Frontend/resumen/resumen.html?' + parametros.toString());
});

//iniciar server
app.listen(3000, () => {
    console.log('servidor ejecutandose en el puerto 3000');
});