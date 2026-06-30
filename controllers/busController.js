const Bus=require("../models/Bus");
const { Op } = require("sequelize");

// insert bus
const createBus=async(req,res)=>{

    try{
        const bus=await Bus.create(req.body);

        res.status(201).json({
            message:"Bus added successfully",
            bus,
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }

};

// Available Seats
const getAvailableBuses=async(req,res)=>{

    try{

        const buses=await Bus.findAll({

            where:{

                availableSeats:{
                    [Op.gt]:req.params.seats,
                },

            },

        });

        res.json(buses);

    }catch(err){

        res.status(500).json({message:err.message});

    }

};

//read findbypk

const getBusById=async(req,res)=>{
    try{
        const bus=await Bus.findByPk(req.params.id);

        if(!bus){
            return res.status(404).json({
                message:"Bus not found",
            });
        }
        res.json(bus);
    }catch(err){
         res.status(500).json({
            message:err.message,
         });
    }
};

//update

const updateBus=async (req,res)=>{
    try{
        const bus=await Bus.findByPk(req.params.id);
        if(!bus){
            return res.status(404).json({
                message:"Bus not found",
            });
        }
        await bus.update(req.body);
        res.json({
            message:"Bus updated successfully",
            bus,
        });
        
        
    }catch(err){
        res.status(500).json({
            message:err.message,
        });
    }
};

//delete
const deleteBus=async (req,res)=>{
    try{
        const bus=await Bus.findByPk(req.params.id);
        if(!bus){
            return res.status(404).json({
                message:"Bus not found",
            });
        }
        await bus.destroy();
        res.json({
            message:"Bus deleted successfully",
        });
    }catch(err){
        res.status(500).json({
            message:err.message,
        });
    }
};

module.exports={
    createBus,
    getAvailableBuses,
    getBusById,
    updateBus,
    deleteBus
};