const conexion = require('../config/Database');

async function registrarPedido(cliente, correo, producto, cantidad, tamano, llevar, observaciones) {
    const db = await conexion();
    const sql = 'INSERT INTO pedidos (cliente, correo, producto, cantidad, tamano, llevar, observaciones) VALUES (?,?,?,?,?,?,?)';  //los signos de ? 
    
    const [resultado] = await db.execute(sql,[  //crear arreglo de resultados
        cliente, correo || null, producto, cantidad, tamano || null, llevar, observaciones
    ]);

    await db.end();
    return resultado.insertId; //retornar a id creado
}

module.exports = 
{
    registrarPedido
};