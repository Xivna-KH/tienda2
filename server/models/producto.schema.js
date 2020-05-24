const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductoSchema = new Schema({
    nombre: {type: String, required: true},
    cantidad: {type: Number, default: 0},
    precio: {type: Number, required: true}
});

module.exports = mongoose.model('Producto', ProductoSchema);