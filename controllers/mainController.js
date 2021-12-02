const path = require('path');

// ToDo: modificar los docuemntos a .ejs

const mainController = {

    home: (req,res) => {
        res.render('home');
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
        res.sendFile('detallesDelProducto');
    },

    carritoDeCompras: (req,res) => {
        res.sendFile( 'carritoDeCompra');
    }

};

module.exports  = mainController;
