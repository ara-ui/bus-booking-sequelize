const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Bus = sequelize.define("Bus",{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    busNumber:{
        type:DataTypes.STRING,
        allowNull:false
    },

    source:{
        type:DataTypes.STRING
    },

    destination:{
        type:DataTypes.STRING
    },

    availableSeats:{
        type:DataTypes.INTEGER
    }

});

module.exports=Bus;