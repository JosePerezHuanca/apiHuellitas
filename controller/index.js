const model=require('../model/Pets');
const fs=require('fs');

const readAll=async(req,res)=>{
    let pets= await model.getPets();
    res.json(pets);
}

const read=async(req,res)=>{
let id=req.params.id;
let pet=await model.getPet(id);
res.json(pet);
}


const create=async(req,res)=>{
    let petObj=req.body;
    petObj.imagen='public/uploads/'+req.file.filename;
await model.create(petObj);
res.send('creado');
}

const update=async(req,res)=>{
let id=req.params.id;
let petObj=req.body;
let file= await model.getFile(id);
fs.unlink('./'+file.imagen,(error)=>{
if(error){
    throw error;    
}
});
await model.update(id,petObj);
res.send('ok');
}

const remove=async(req,res)=>{
let id=req.params.id;
let file=await model.getFile(id);
fs.unlink('./'+ file.imagen, (error)=>{
    if(error){
        throw error;
    }
})
await model.remove(id);
res.send('ok');
}

module.exports={create,readAll,read,update,remove};