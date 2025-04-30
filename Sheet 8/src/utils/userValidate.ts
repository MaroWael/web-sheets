import { check } from "express-validator";

export function userValidate() {
    return [
        check('username').not().isEmpty().withMessage("Username is required")
        .isLength({min: 5, max: 20}).withMessage("Username length must be between 5 - 20"),
        check('email').not().isEmpty().withMessage("Email is required")
        .isEmail().withMessage("Enter a valid email"),
        check('password').not().isEmpty().withMessage("password is required")
        .isLength({min: 8, max: 20}).withMessage("Username length must be between greater than or equal 8"),
    ]
}