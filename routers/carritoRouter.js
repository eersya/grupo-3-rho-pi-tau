const express = require('express');
const carritoRouter = express.Router();
const carritoController = require('../controllers/carritoController');

// Detalles del producto
carritoRouter.get('/detail/:id', carritoController.detailProduct);


// Creación del proucto
carritoRouter.get('/create', carritoController.createProductView);

carritoRouter.post('/create', carritoController.createProduct);

// Modificar producto
carritoRouter.get('/update', carritoController.updateProductView);

carritoRouter.put('/update', carritoController.updateProduct);


// Borrar producto
carritoRouter.delete('/delete/:id', carritoController.deleteProduct);


module.exports = carritoRouter;