const Prod = require('../models/producto.schema');

const prodCtrl = {};

prodCtrl.getProductos = async (req, res)=>{
    const productos = await Prod.find();
    res.json(productos);
};

prodCtrl.crearProducto = async (req, res)=>{
    const producto = new Prod(req.body);
    await producto.save();
    res.json({
        'status': 'Producto guardado'
    });
};

prodCtrl.getProducto = async (req, res) =>{
    const producto = await Prod.findById(req.params.id);
    res.json(producto);
}

prodCtrl.editProducto = async (req, res) =>{
    const {id} = req.params;
    const producto = {
        nombre: req.body.nombre,
        cantidad: req.body.telefono,
        precio: req.body.salario
    };
    await Prod.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({status: 'Producto actualizado'});
}

// prodCtrl.compraProducto = async (req, res) =>{
    
// }

// prodCtrl.ventaProducto = async (req, res) =>{
    
// }

prodCtrl.eliminarProducto = async (req, res) =>{

    await Prod.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto eliminado'});
}

module.exports = prodCtrl;