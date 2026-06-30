const express = require("express");

const router = express.Router();

const {
    createBooking,
    getUserBookings,
    getBusBookings
} = require("../controllers/bookingController");

// Create Booking
router.post("/", createBooking);

router.get("/user/:id", getUserBookings);
router.get("/bus/:id", getBusBookings);

module.exports = router;