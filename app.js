const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/formularioderegistro.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/detalle', (req,res)=>{
    res.sendFile(__dirname + '/views/detallesDelProducto.html');
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