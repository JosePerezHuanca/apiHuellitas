const multer=require('multer');
const path=require('path');

const storage=multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,'public/uploads');
},
filename:(req,file,cb)=>{
        cb(null, file.fieldname+ '-'+ Date.now()+ path.extname(file.originalname));
}
});

const upload=multer({
        storage: storage,
        fileFilter:(req,file,cb)=>{
                const foto=file.mimetype.startsWith('image/');
                if(foto){
                        cb(null, true);
                }
                else{
                        cb({message:"error en el tipo de archivo"}, false);
                }
        }
});

module.exports=upload;