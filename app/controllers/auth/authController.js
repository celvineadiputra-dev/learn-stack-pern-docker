const { user, Sequelize } = require('../../../models')
const { hash } = require('../../utils/hash')
const { authLogger } = require('../../../config/logging')

const responseJson = require('../../utils/response')
const { ValidationError } = require('sequelize')
const Joi = require('joi')

const Op = Sequelize.Op

let self = {}

const userSchema = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
})
    .options({
        abortEarly: false,
    })
    .messages({
        'string.empty': '{#label} harus diisi',
        'string.email': '{#label} tidak valid',
        'string.min': '{#label} minimal {#limit} karakter',
        'any.required': '{#label} harus diisi',
    })

self.register = async (req, res) => {
    try {
        const { body } = req

        const { error } = userSchema.validate(body, {
            errors: {
                wrap: {
                    label: '',
                },
            },
        })
        if (error) {
            const errors = error.details.map((error) => error.message)
            return responseJson(res, 402, errors)
        }

        const hashPassword = await hash(body.password)
        const newUser = {
            userName: body.userName,
            email: body.email,
            password: hashPassword,
        }

        const data = await user.create(newUser)

        if (data) {
            return responseJson(res, 200, 'Success create new user')
        }
        return responseJson(res, 500, 'Failed create new user')
    } catch (error) {
        if (error instanceof ValidationError) {
            const errors = error.errors.map((err) => err.message)

            return responseJson(res, 500, errors)
        }
        return responseJson(res, 500, error)
    }
}

module.exports = self
