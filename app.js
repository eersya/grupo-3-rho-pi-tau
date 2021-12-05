/* Package required*/

const express = require('express');
const path = require('path');
const mainRouter = require('./routers/mainRouter');


const app = express();
app.use('/', mainRouter);


app.use(express.static(path.join(__dirname, 'public')));

/* Choose available port */

const PORT = process.env.PORT || 3000;

/* view engine setup */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ' + PORT);
});
app.get('/carritoDeCompra', (req,res)=>{
    res.sendFile(__dirname + '/views/carritoDeCompra.html');
});

app.get('/cargaProducto', (req,res)=>{
    res.sendFile(__dirname + '/views/cargaProducto.html');
});

app.get('/edicionProducto', (req,res)=>{
    res.sendFile(__dirname + '/views/edicionProducto.html');
});
