const Booking = require("../models/Booking");
const User = require("../models/User");
const Bus = require("../models/Bus");

// Create Booking
const createBooking = async (req, res) => {
    try {

        const booking = await Booking.create({
            seatNumber: req.body.seatNumber,
            UserId: req.body.userId,
            BusId: req.body.busId,
        });

        res.status(201).json({
            message: "Booking created successfully",
            booking,
        });

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }
};

// Get all bookings of a user (with Bus details)
const getUserBookings = async (req, res) => {

    try {

        const bookings = await Booking.findAll({

            where: {
                UserId: req.params.id,
            },

            include: [
                {
                    model: Bus,
                    attributes: ["id", "busNumber", "totalSeats", "availableSeats"],
                },
            ],

        });

        res.json(bookings);

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }

};

// Get all bookings of a bus (with User details)
const getBusBookings = async (req, res) => {

    try {

        const bookings = await Booking.findAll({

            where: {
                BusId: req.params.id,
            },

            include: [
                {
                    model: User,
                    attributes: ["id", "name", "email"],
                },
            ],

        });

        res.json(bookings);

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }

};

module.exports = {
    createBooking,
    getUserBookings,
    getBusBookings,
};