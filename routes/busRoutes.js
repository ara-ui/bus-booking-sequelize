const express=require("express");

const router=express.Router();

const {createBus,getAvailableBuses, getBusById, updateBus, deleteBus}=require("../controllers/busController");

router.post("/",createBus);

router.get("/available/:seats",getAvailableBuses);

router.get('/:id',getBusById);

router.put('/:id',updateBus);

router.delete('/:id',deleteBus);

module.exports=router;