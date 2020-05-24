const express = require('express');
const routerEmp = express.Router();

const emp = require('../controllers/empleado.controller');

routerEmp.get('/', emp.getEmpleados);
routerEmp.post('/', emp.crearEmpleados);
routerEmp.get('/:id', emp.getEmpleado);
routerEmp.put('/:id', emp.editEmpleado);
routerEmp.delete('/:id', emp.eliminarEmpleado);

module.exports = routerEmp;