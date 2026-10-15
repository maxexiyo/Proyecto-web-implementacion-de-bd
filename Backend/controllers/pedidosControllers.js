const pedidoModel = require('../models/pedidoModels');

async function registrarPedido(req, res) {
    try{
        const cliente = req.body.cliente;
        const correo = req.body.correo || '';
        const producto =  req.body.producto;
        const cantidad= Number(req.body.cantidad);
        const tamano = req.body.tamano || '';
        const llevar = req.body.llevar ? 1 : 0;
        const observaciones = req.body.observaciones || '';


        //trim elimina espacios en blanco
        if(typeof cliente !== 'string' || !cliente.trim() || typeof producto !== 'string' || !producto.trim() || !Number.isInteger(cantidad)|| cantidad <1 || typeof observaciones !== 'string'){
            return res.status(400).send('Datos del pedido son invalidos');
        }
        
        const id = await pedidoModel.registrarPedido(
        cliente.trim(),
        correo.trim(),
        producto.trim(),
        cantidad,
        tamano,
        llevar,
        observaciones)
        const parametros = new URLSearchParams({
            id:id,
            nombre: cliente.trim(),
            correo: correo.trim(),
            producto: producto.trim(),
            cantidad: cantidad,
            tamano: tamano,
            llevar: llevar ? 'Sí' : 'No',
            observaciones: observaciones
        }) ;
        res.redirect('/resumen/resumen.html?' + parametros.toString());
    }

    catch(error){
        console.error('Error al registrar el pedido:', error);
        res.status(500).send('Error al guardar el pedido');

    }
    
}

  module.exports = 
    {
        registrarPedido
    };