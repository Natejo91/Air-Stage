const express = require('express')
const asyncHandler = require('express-async-handler');
const { ReservationDay } = require('../../db/models');
const { Venue } = require('../../db/models');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op

router.post('', asyncHandler(async (req, res) => {
    const { venueId, reserverId } = req.body;
    const reservation = await ReservationDay.create({ reserverId, venueId })

    return res.json(reservation)
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    let array = [];
    console.log(id);
    const reservations = await ReservationDay.findAll({ where: { reserverId: id }})
    console.log(reservations);
    if (reservations[0]) {
        reservations.forEach(reservation => {
            array.push(reservation.dataValues.venueId)
        }) //maybe need to come up with some logic here

        const venues = await Venue.findAll({
            where: {
                id: {
                    [Op.in]: array
                }
            }
        })
        return res.json(venues);
    }
}))


module.exports = router;
