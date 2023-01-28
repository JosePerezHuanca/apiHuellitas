const express=require('express');
const app=express()
const morgan=require('morgan');
const cors=require('cors');
const indexRoute=require('./routes/indexRouter')
const db=require('./model/db');
db.conectar();


app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/huellitas', indexRoute);
app.use((req,res,next)=>{
    res.status(404).send('El recurso no existe');
});

const port=process.env.PORT || 8080;
app.listen(port);
console.log('Ok');
