const express=require("express");

const router=express.Router();

const {createUser,getUsers, getUserById, updateUser, deleteUser,getUserBookings}=require("../controllers/userController");

router.post("/",createUser);
router.get("/:id/bookings", getUserBookings);

router.get("/",getUsers);
router.get('/:id',getUserById);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);


module.exports=router;
