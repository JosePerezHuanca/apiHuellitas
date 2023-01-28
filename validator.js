const {body}=require('express-validator');

const checkRequest=()=>{
return[
    body('nombre').notEmpty().withMessage('El campo nombre es obligatorio'),
    body('tipo').notEmpty().withMessage('Se requiere tipo de mascota'),
    body('edad').isInt().notEmpty().withMessage('El campo edad es necesario'),
    body('cantidad').trim().notEmpty().withMessage('El campo cantidad es necesario'),
    body('sexo').trim().notEmpty().withMessage('Elige un sexo'),
    body('castrado').isBoolean().withMessage('El campo castrado es necesario'),
    body('condicion').isBoolean().withMessage('El campo condicion no puede estár vacío'),
    body('duenio').notEmpty().withMessage('El campo dueño no puede estár vacío'),
    body('email').trim().notEmpty().withMessage('Este campo es obligatorio').isEmail().withMessage('Ingresa un mail valido'),
    body('localidad').notEmpty().withMessage('Necesitamos la localidad del dueño de la mascota')
]
}

module.exports=checkRequest;