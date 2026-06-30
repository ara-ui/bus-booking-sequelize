const User=require("../models/User");
const Booking=require('../models/Booking');
const Bus=require('../models/Bus');


// Insert User
const createUser=async(req,res)=>{

    try{

        const user=await User.create(req.body);

        res.status(201).json(user);

    }catch(err){

        res.status(500).json({message:err.message});

    }

};

// Get All Users
const getUsers=async(req,res)=>{

    try{

        const users=await User.findAll();

        res.json(users);

    }catch(err){

        res.status(500).json({message:err.message});

    }

};
//findbupk

const getUserById=async(req,res)=>{
    try{
        const user=await User.findByPk(req.params.id);

        if(!user){
            return res.status(404)>json({
                message:"User not found",
            });
        }
    }catch(err){
        res.status(500).json({
        message:err.message,
        });
    }
};

//update

const updateUser=async(req,res)=>{
    try{
        const user=await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({
                message:"User not found",
            });
        }
        await user.update(req.body);
        res.json({
            message:"User updated successfully",
            user,
        });
    }catch(err){
        res.status(500).json({
            message:err.message,
        });
    }
};

//delete

const deleteUser=async(req,res)=>{
    const user= await User.findByPk(req.params.id);
    try{

    
    if(!user){
        return res.status(404).json({
            message:"User not found",
        });
    }
    await user.destroy();

    res.json({
        message:"User deleted successfully",
    });
}catch(err){
    res.status(500).json({
        message:err.message,
    });
}

};

const getUserBookings = async (req, res) => {

    try {

        const user = await User.findByPk(req.params.id, {

            include: [

                {
                    model: Booking,

                    include: [
                        {
                            model: Bus,
                        },
                    ],

                },

            ],

        });

        if (!user) {

            return res.status(404).json({
                message: "User not found",
            });

        }

        res.json(user);

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }

};

module.exports={
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    getUserBookings
};