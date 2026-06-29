const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "bus_booking_system_sequelize",
    "root",
    "admin123",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database Connected");
    } catch (err) {
        console.log(err);
    }
})();

module.exports = sequelize;