const express = require('express')
const asyncHandler = require('express-async-handler');
const { ReservationDay } = require('../../db/models');
const router = express.Router();

router.post('', asyncHandler(async (req, res) => {
    const { venueId, reserverId } = req.body;
    const reservation = await ReservationDay.create({ reserverId, venueId })

    return res.json(reservation)
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const reservations = await ReservationDay.findAll({ where: { reserverId: id }})
    return res.json(reservations);

}))


module.exports = router;
