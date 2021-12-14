
const productos = require('./productos');

const path = require('path');
const fs = require('fs');

const multer = require('multer');

const productControllers = {

    detailProduct: function(req, res) {
        const id = req.params.id;
        const product = productos.find( item => item.id == id);

        if (product === null) {
            res.send("No existe este producto");
        } else {
            res.sender('detallesDelProducto', { producto: producto });
        }

    },

    createProduct: function(req, res) {
        
    },

    deleteProduct: function(req, res) {
        const id = req.params.id;

    },

    updateProduct: function(req, res) {
        
    }
    
};

module.exports = productControllers;
