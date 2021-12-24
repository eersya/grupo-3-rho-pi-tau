const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    home: (req,res) => {
        res.render('home', {productos});
    },

    register: (req,res) => {
        res.render('formularioderegistro');
    },

    login: (req,res) => {
        res.render('login');
    },


    carritoDeCompras: (req,res) => {
        res.render( 'carritoDeCompra');
    },

    nuevoProducto: (req,res) => {
        res.render( 'nuevoProducto');
    },

    modificaProducto: (req,res) => {
        res.render( 'modificaProducto');
    }

};

module.exports  = mainController;
