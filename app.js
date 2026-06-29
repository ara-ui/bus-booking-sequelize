const express=require("express");
const sequelize=require("./db");

require("./models/User");
require("./models/Bus");
require("./models/Booking");
require("./models/Payment");

const userRoutes=require("./routes/userRoutes");
const busRoutes=require("./routes/busRoutes");

const app=express();

app.use(express.json());

app.use("/users",userRoutes);
app.use("/buses",busRoutes);

sequelize.sync({force:false})
.then(()=>{

    console.log("Tables Created");

    app.listen(3000,()=>{

        console.log("Server Running");

    });

});