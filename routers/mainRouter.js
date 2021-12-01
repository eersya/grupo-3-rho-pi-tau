const express = require('express');

const mainController = require('../controllers/mainController');

const mainRouter = express.Router();

mainRouter.get('/', mainController.home);

mainRouter.get('/register', mainController.register);

mainRouter.get('/login', mainController.login);

mainRouter.get('/detalle', mainController.detailProduct);

mainRouter.get('/carritoDeCompra', mainController.carritoDeCompras);

module.exports = mainRouter;
