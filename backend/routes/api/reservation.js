const express = require('express')
const asyncHandler = require('express-async-handler');
const { ReservationDay } = require('../../db/models');
const router = express.Router();

router.post('', asyncHandler(async (req, res) => {
    const { venueId, reserverId } = req.body;
    const reservation = await ReservationDay.create({ reserverId, venueId })

    return res.json(reservation)
}));


module.exports = router;
