const express = require('express');
const carritoRouter = express.Router();
const carritoController = require('../controllers/carritoController');

carritoRouter.get('/detail/:id', carritoController.detailProduct);

carritoRouter.get('/create', carritoController.createProduct);
carritoRouter.post('/create', carritoController.createProduct);

carritoRouter.get('/update', carritoController.updateProduct);
carritoRouter.put('/update', carritoController.updateProduct);

carritoRouter.delete('/delete/:id', carritoController.deleteProduct);


module.exports = carritoRouter;
