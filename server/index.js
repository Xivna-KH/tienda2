const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./db');

//Configuracion
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api/empleados', require('./routes/empleado.routes'));
app.use('/api/productos', require('./routes/producto.routes'));

//Iniciar el servidor
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});