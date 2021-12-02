const path = require('path');

// ToDo: modificar los docuemntos a .ejs

const mainController = {

    home: (req,res) => {
        res.sendFile(__dirname + '../views/home.html');
    },

    register: (req,res) => {
        res.sendFile(__dirname + '../views/formularioderegistro.html');
    },

    login: (req,res) => {
        res.sendFile(__dirname + '../views/login.html');
    },

    // Cuando tengamos los modelos de nuestros productos
    // tendremos que migrar y modificar este método
    detailProduct: (req,res) => {
        res.sendFile(__dirname + '../views/detallesDelProducto.html');
    },

    carritoDeCompras: (req,res) => {
        res.sendFile(__dirname + '../views/carritoDeCompra.html');
    }

};

module.exports  = mainController;
