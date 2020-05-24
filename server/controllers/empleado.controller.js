const Emp = require('../models/empleado.schema');

const empCtrl = {};

empCtrl.getEmpleados = async (req, res)=>{
    const empleados = await Emp.find();
    res.json(empleados);
};

empCtrl.crearEmpleados = async (req, res)=>{
    const empleado = new Emp(req.body);
    await empleado.save();
    res.json({
        'status': 'Empleado guardado'
    });
};

empCtrl.getEmpleado = async (req, res) =>{
    const empleado = await Emp.findById(req.params.id);
    res.json(empleado);
}

empCtrl.editEmpleado = async (req, res) =>{
    const {id} = req.params;
    const empleado = {
        nombre: req.body.nombre,
        puesto: req.body.puesto,
        telefono: req.body.telefono,
        salario: req.body.salario
    };
    await Emp.findByIdAndUpdate(id, {$set: empleado}, {new: true});
    res.json({status: 'Empleado actualizado'});
}

empCtrl.eliminarEmpleado = async (req, res) =>{

    await Emp.findByIdAndRemove(req.params.id);
    res.json({status: 'Empleado despedido'});
}

module.exports = empCtrl;