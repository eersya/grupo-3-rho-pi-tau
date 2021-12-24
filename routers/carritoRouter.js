const express = require('express');
const carritoRouter = express.Router();
const carritoController = require('../controllers/carritoController');

carritoRouter.get('/detail/:id', carritoController.detailProduct);

carritoRouter.get('/create', carritoController.createProductView);
carritoRouter.post('/create', carritoController.createProduct);

carritoRouter.get('/update', carritoController.updateProductView);
carritoRouter.put('/update', carritoController.updateProduct);

carritoRouter.delete('/delete/:id', carritoController.deleteProduct);


module.exports = carritoRouter;