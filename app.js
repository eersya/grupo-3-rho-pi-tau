/* Package required*/

const express = require('express');
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const productRouer = require('./routers/productRouter');
const userRouter = require('./routers/userRouter');

const app = express();
app.use('/', mainRouter);
app.use('/user', userRouter);
app.use('/product', productRouer);



app.use(express.static(path.join(__dirname, 'public')));

/* Choose available port */

const PORT = process.env.PORT || 3000;

/* view engine setup */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ' + PORT);
});
