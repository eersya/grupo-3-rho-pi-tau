const express = require('express');
const productRouter = express.Router();



const productController = require('../controllers/productController');

// Detalles del producto
productRouter.get('/detail/:id', productController.detailProduct);


// Creación del proucto
productRouter.get('/create', productController.createProductView);

productRouter.post('/create', productController.createProduct);

// Modificar producto
productRouter.get('/update', productController.updateProductView);

productRouter.put('/update', productController.updateProduct);


// Borrar producto
productRouter.delete('/delete/:id', productController.deleteProduct);


module.exports = productRouter;