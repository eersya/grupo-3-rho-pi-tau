const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {

    home: (req,res) => {
        res.render('home', {
            productos:productos,
            toThousand
        });
    },

    register: (req,res) => {
        res.render('formularioderegistro');
    },

    login: (req,res) => {
        res.render('login');
    },

    // Cuando tengamos los modelos de nuestros productos
    // tendremos que migrar y modificar este método
/*     detailProduct: (req,res) => {
        id = req.params.id;
        producto = productos.find( item => item.id == id);
        res.render('detallesDelProducto', {producto:producto});
    }, */

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
