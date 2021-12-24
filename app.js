/* Package required*/

const express = require('express');
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const productRouter = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');
const carritoRouter = require('./routers/carritoRouter');

const app = express();

/* view engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/user', userRouter);
app.use('/carrito', productRouter);

app.use(express.static(path.join(__dirname, 'public')));

/* Choose available port */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ' + PORT);
});
