const express = require('express');

const mainController = require('../controllers/mainController');

const mainRouter = express.Router();

mainRouter.get('/', mainController.home);

mainRouter.get('/register', mainController.register);

mainRouter.get('/login', mainController.login);

mainRouter.get('/detalle/:id', mainController.detailProduct);

mainRouter.get('/carritoDeCompra', mainController.carritoDeCompras);

mainRouter.get('/nuevoProducto', mainController.nuevoProducto);

mainRouter.get('/modificaProducto', mainController.modificaProducto);

module.exports = mainRouter;
