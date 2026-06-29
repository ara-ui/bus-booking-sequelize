const express=require("express");

const router=express.Router();

const {createBus,getAvailableBuses}=require("../controllers/busController");

router.post("/",createBus);

router.get("/available/:seats",getAvailableBuses);

module.exports=router;