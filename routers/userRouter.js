const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

// Crear usuario 
userRouter.get('/create', userController.createUserView);

userRouter.post('/create', userController.createUser);

// Modificar usuario 
userRouter.put('/update/:id', userController.updateUser);

// Eliminar usuario
userRouter.delete('/delete/:id', userController.deleteUser);

module.exports = userRouter;