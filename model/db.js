const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
let stringConexion={
local: 'mongodb://localhost:27017/huellitas',
atlas: 'mongodb+srv://pescargrupo2:animalitos.GRUPO2@cluster0.1kay2kj.mongodb.net/huellitas?retryWrites=true&w=majority'
}

async function conectar(){
try{
await mongoose.connect(stringConexion.atlas,{useNewUrlParser: true, useUnifiedTopology: true});
console.log('Conectado');
}
catch(error){
console.log(error.message);
}
}


module.exports={conectar}