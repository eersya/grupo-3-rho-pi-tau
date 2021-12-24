const DB_FILENAME = 'productos.json';
const productos = require('../data/productos.json');

const path = require('path');
const fs = require('fs');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const multer = require('multer');

function saveProducts(ps) {
    fs.writeFileSync(DB_FILANAME, JSON.stringify(ps));
}

const productControllers = {

    viewProducts: function(req, res) {
        res.render('home', {
            productos: productos, 
            toThousand
        });
    },

    detailProduct: function(req, res) {
        const id = req.params.id;
        const producto = productos.find( item => item.id == id);

        if (producto === null) {
            res.send("No existe este producto");
        } else {
            res.render('detallesDelProducto', {
                producto: producto,
                toThousand
                });
        }

    },

    createProduct: function(req, res) {
        res.render('nuevoProducto');
       
    },

    deleteProduct: function(req, res) {
        const id = req.params.id;

        const newProducts = productos.find(product => product.id != id);
        saveProducts(newProducts);

        res.redirect("/");

    },

    updateProduct: function(req, res) {
        const id = req.params.id;
        const productToEdit = productos.find(product => product.id == id);
        
        res.render("modificaProducto", {productToEdit:productToEdit})           
    },
    store: function(req,res){
        let newProduct = {
			id:productos[productos.length - 1].id + 1,
			...req.body,
			image: req.file.filename
		};
		productos.push(newProduct)
//		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
//		res.redirect('/');
    }
    
};

module.exports = productControllers;
