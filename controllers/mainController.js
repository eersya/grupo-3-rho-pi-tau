const path = require('path');
const productos = require('./productos');
// ToDo: modificar los docuemntos a .ejs

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

    // Cuando tengamos los modelos de nuestros productos
    // tendremos que migrar y modificar este método
    detailProduct: (req,res) => {
        id = req.params.id;
        producto = productos.find( item => item.id == id);
        res.render('detallesDelProducto', {producto:producto});
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
