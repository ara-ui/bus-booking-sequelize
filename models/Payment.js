const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Payment=sequelize.define("Payment",{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    amount:{
        type:DataTypes.FLOAT
    },

    status:{
        type:DataTypes.STRING
    }

});

module.exports=Payment;