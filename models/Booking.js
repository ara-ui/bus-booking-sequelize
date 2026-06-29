const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Booking=sequelize.define("Booking",{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    seatsBooked:{
        type:DataTypes.INTEGER
    }

});

module.exports=Booking;