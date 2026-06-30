const express=require("express");
const sequelize=require("./db");

const User=require("./models/User");
const Bus=require("./models/Bus");
const Booking=require("./models/Booking");
const payment=require("./models/Payment");


const userRoutes=require("./routes/userRoutes");
const busRoutes=require("./routes/busRoutes");
const bookingRoutes = require("./routes/bookingRoutes");


const app=express();

app.use(express.json());

app.use("/users",userRoutes);
app.use("/buses",busRoutes);
app.use("/bookings", bookingRoutes);


//creating one many association
User.hasMany(Booking);
Booking.belongsTo(User);

Bus.hasMany(Booking);
Booking.belongsTo(Bus);


sequelize.sync({force:true})
.then(()=>{

    console.log("Tables Created");

    app.listen(3000,()=>{

        console.log("Server Running");

    });

})