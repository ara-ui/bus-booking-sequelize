const Bus=require("../models/Bus");
const { Op } = require("sequelize");

// Create Bus
const createBus=async(req,res)=>{

    try{

        const bus=await Bus.create(req.body);

        res.status(201).json(bus);

    }catch(err){

        res.status(500).json({message:err.message});

    }

};

// Available Seats
const getAvailableBuses=async(req,res)=>{

    try{

        const buses=await Bus.findAll({

            where:{

                availableSeats:{
                    [Op.gt]:req.params.seats
                }

            }

        });

        res.json(buses);

    }catch(err){

        res.status(500).json({message:err.message});

    }

};

module.exports={createBus,getAvailableBuses};