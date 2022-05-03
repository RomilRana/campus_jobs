const { check } = require('express-validator');

exports.emailValidation = [
    check('email').normalizeEmail().isEmail().notEmpty().withMessage('invalid Email'),
    check('password').trim().not().notEmpty().isLength({ min: 3, max: 10 }).withMessage('password length must be 3 to 10'),
]