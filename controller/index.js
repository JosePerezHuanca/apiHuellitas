const model=require('../model/Pets');
const fs=require('fs');
const {validationResult}=require('express-validator');

const readAll=async(req,res)=>{
    let pets= await model.getPets();
    if(pets){
        res.json(pets);
    }
    else{
        res.status(404).send('El recurso no existe');
    }
}
const read=async(req,res)=>{
let id=req.params.id;
let pet=await model.getPet(id);
if(pet){
    res.json(pet);
}
else{
    res.status(404).send('El recurso no existe');
}
}

const create=async(req,res)=>{
    let petObj=req.body;
    petObj.imagen='https://grupohuellitas.glitch.me/uploads/'+req.file.filename;
let errors=validationResult(req);
if(!errors.isEmpty()){
    return res.send(errors.array());
}
await model.create(petObj);
res.send('ok');
}


const update=async(req,res)=>{
let id=req.params.id;
let petObj=req.body;
petObj.imagen='https://grupohuellitas.glitch.me/uploads/'+req.file.filename;
let file=petObj.imagen
let arrayString=Array.from(file);
let fileString=arrayString.slice(41);
let stringResult=fileString.join("");
let errors=validationResult(req);
if(!errors.isEmpty()){
    return res.send(errors.array());
}
    fs.unlink   ('./public/uploads/'+ stringResult,(error)=>{
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
let arrayString=Array.from(file.imagen);
let stringFile=arrayString.slice(41);
let stringFileResult=stringFile.join("");
fs.unlink('./public/uploads/'+ stringFileResult, (error)=>{
    if(error){
        throw error;
    }
})
await model.remove(id);
res.send('ok');
}

module.exports={create,read,readAll,update,remove};