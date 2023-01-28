const express=require('express');
const router=express.Router();
const index=require('../controller/index');
const upload=require('../upload');
const check=require('../validator');

router.get('/', index.readAll);
router.get('/:id', index.read);
router.post('/', upload.single('imagen'),check() ,index.create);
router.put('/:id', upload.single('imagen'),check() ,index.update);
router.delete('/:id', index.remove);

module.exports=router;