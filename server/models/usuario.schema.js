const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

const usuarioSchema = new Schema({
    nombre: { 
        type: String, required: 'El nombre no puede estar vacio' 
    },
    email: { 
        type: String, required: 'El email no puede estar vacio',
        unique: true
    },
    password: { 
        type:String, required: 'El password no puede estar vacio', 
        minlength: [8, 'La contraseña debe tener al menos 8 caracteres'] 
    }, 
    saltSecret: String
});

//Validación para email
usuarioSchema.path('email').validate((val)=>{
    emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    return emailRegex.test(val);
}, 'Email invalido.');

//Eventos
usuarioSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

module.exports = mongoose.model('Usuario', UsuarioSchema);