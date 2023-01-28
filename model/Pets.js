const mongoose=require('mongoose');
const db=require('./db');


const petSchema=mongoose.Schema({
nombre:{
    type: String,
    required: true
},
tipo:{
    type: String,
    required: true
},
edad:{
    type: Number,
    required: true
},
cantidad:{
    type: String,
    required: true
},
sexo:{
    type: String,
    required: true
},
castrado:{
    type: Boolean,
    default: false
},
condicion:{
    type: Boolean,
    default: false
},
condicionDescripcion:{
    type: String,
    required: false
},
imagen:{
    type: String,
    required: true
},
duenio:{
    type: String,
    required: true
},
email:{
    type: String,
    required: true
},
localidad:{
    type: String,
    required: true
},
comentarios:{
    type: String,
    required: false
}
});

const PetModel=mongoose.model('pets',petSchema);

async function create(pet){
    try{
        let petM=new PetModel(pet);
        await petM.save();
    }
    catch(error){
        console.log(error.message);
    }
}

async function getPets(){
    try{
        let query=await PetModel.find();
        return query;
    }
    catch(erro){
        console.log(error.message);
    }
}

async function getPet(id){
    try{
        let query=await PetModel.findOne({_id: id});
        return query;
    }
    catch(error){
        console.log(error.message);
    }
}

async function getFile(id){
    let query=await PetModel.findOne({_id: id},{imagen: 1, _id: 0});
    return query;
}

    async function remove(id){
    try{
        let query=await PetModel.deleteOne({_id: id});
    }
    catch(error){
        console.log(error.message);
    }
}

async function update(id, pet){
    try{
        let query=await PetModel.updateOne({_id: id},{$set: pet});
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports={create, getPets, getPet,getFile, remove, update};