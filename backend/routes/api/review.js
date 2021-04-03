const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();
const Sequelize = require('sequelize');
const { Review } = require('../../db/models');
const Op = Sequelize.Op

router.get('/:id', asyncHandler(async (req, res) => {
    const id  = req.params.id;
    const reviews = await Review.findAll({where: { venueId: id }})
    return res.json(reviews);
}))


router.post('/', asyncHandler(async (req, res) => {
    const {
        userId,
        venueId,
        title,
        body,
        rating,
        reviewImgUrl
    } = req.body;

    const review = await Review.create({
        userId,
        venueId,
        title,
        body,
        rating,
        reviewImgUrl
    })
    return res.json(review);
}))


router.put('/:id', asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const { userId, venueId, title, body, rating, reviewImgUrl,  } = req.body;

    const review = await Review.findByPk(reviewId);
    return res.json(review);

}))

module.exports = router;
