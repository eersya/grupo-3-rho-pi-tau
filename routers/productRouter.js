// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path =require("path");
// ************ Controller Require ************
const storage =multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, path.join(__dirname,'../../public/images/products') )
    },
    filename:(req,file,cb)=>{
        console.log(file)
        const newFilename ='img-' + Date.now() + '-' + path.extname(file.originalname); 
        cb(null, newFilename );
    }
});

const productController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productController.viewProducts); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.createProduct); 

//const upload = multer({storage:storage });
//router.post('/',upload.single('image-product'), productsController.store); 
router.post('/', productController.store); 
/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productController.detailProduct); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id/', productController.updateProduct); 
//router.put('/edit/:id', productController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productController.deleteProduct); 


module.exports = router;
