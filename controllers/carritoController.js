const DB_FILENAME = 'carrito.json';
const carrito = require('./carrito');

const path = require('path');
const fs = require('fs');

const multer = require('multer');

function saveProducts(ps) {
    fs.writeFileSync(DB_FILANAME, JSON.stringify(ps));
}

const carritoController = {

    viewProducts: function(req, res) {
        res.render('home', { carrito: carrito });
    },

    detailProduct: function(req, res) {
        const id = req.params.id;
        const product = carrito.find( item => item.id == id);

        if (product === null) {
            res.send("No existe este producto");
        } else {
            res.sender('detallesDelProducto', { producto: producto });
        }

    },

    createProduct: function(req, res) {
        const body = req.body;

        const newProduct = {
            name : body.name,
            avaibleColors : body.colors,
            price : body.price,
            categories : body.categories,
            withDiscount : body.withDiscount,
            discount : body.discount
        };

        const newProducts = carrito.push(newProduct);
        saveProducts(newProducts);

    },

    deleteProduct: function(req, res) {
        const id = req.params.id;

        const newProducts = carrito.filter(p => p.id == id);
        saveProducts(newProducts);

        viewProducts(req, res);

    },

    updateProduct: function(req, res) {
        const id = req.params.id;

        const filteredProducts = carrito.filter(p => p.id == id);

        
    }
};

module.exports = carritoController;
