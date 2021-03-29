const express = require('express')
const asyncHandler = require('express-async-handler');

const { check} = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('firstname')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('First name must be less than 50 characters'),
    check('lastname')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('Last name must be less than 50 characters'),
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    check('address')
        .exists({ checkFalsy: true })
        .isLength({ max: 255 })
        .withMessage('Address must not be more than 255 characters'),
    check('city')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('City must not be more than 50 characters'),
    check('state')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('State name must not be more than 50 characters'),
    handleValidationErrors,
];

router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username, firstname, lastname, address, city, state } = req.body;
        const user = await User.signup({ email, username, password, firstname, lastname, address, city, state });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);


module.exports = router;
