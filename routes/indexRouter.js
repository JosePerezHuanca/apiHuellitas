const express=require('express');
const router=express.Router();
const index=require('../controller/index');
const upload=require('../upload');


router.get('/', index.readAll);
router.get('/:id', index.read);
router.post('/', upload.single('imagen'), index.create);
router.put('/:id', upload.single('imagen'), index.update);
router.delete('/:id', index.remove);

module.exports=router;