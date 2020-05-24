const express = require('express');
const routerProd = express.Router();

const prod = require('../controllers/producto.controller');

routerProd.get('/', prod.getProductos);
routerProd.post('/', prod.crearProducto);
routerProd.get('/:id', prod.getProducto);
routerProd.put('/:id', prod.editProducto);
routerProd.delete('/:id', prod.eliminarProducto);
// routerProd.put('/compra/:id', prod.compraProducto);
// routerProd.put('/venta/:id', prod.ventaProducto);


module.exports = routerProd;