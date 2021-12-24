const express = require('express');

const mainController = require('../controllers/mainController');

const mainRouter = express.Router();

// P+ágina principal
mainRouter.get('/', mainController.home);

// Página de login
mainRouter.get('/login', mainController.login);

module.exports = mainRouter;
