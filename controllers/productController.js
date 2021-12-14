
const DB_FILENAME = 'productos.json';
const productos = require('./productos');

const path = require('path');
const fs = require('fs');

const multer = require('multer');

function saveProducts(ps) {
    fs.writeFileSync(DB_FILANAME, JSON.stringify(ps));
}

const productControllers = {

    viewProducts: function(req, res) {
        res.render('home', { productos: productos });
    },

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
        const body = req.body;

        const newProduct = {
            name : body.name,
            avaibleColors : body.colors,
            price : body.price,
            categories : body.categories,
            withDiscount : body.withDiscount,
            discount : body.discount
        };

        const newProducts = products.push(newProduct);
        saveProducts(newProducts);

    },

    deleteProduct: function(req, res) {
        const id = req.params.id;

        const newProducts = products.filter(p => p.id == id);
        saveProducts(newProducts);

        viewProducts(req, res);

    },

    updateProduct: function(req, res) {
        const id = req.params.id;

        const filteredProducts = products.filter(p => p.id == id);

        
    }
    
};

module.exports = productControllers;
