const express = require('express');

const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

const mainRouter = require('./routers/mainRouter');

app.use('/', mainRouter);

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ' + PORT);
});
