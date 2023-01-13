const mongoose=require('mongoose');

async function conectar(){
try{
await mongoose.connect('mongodb://localhost:27017/huellitas',{useNewUrlParser: true, useUnifiedTopology: true});
console.log('Conectado');
}
catch(error){
console.log(error.message);
}
}


module.exports={conectar}