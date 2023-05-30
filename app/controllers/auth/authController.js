const { user, Sequelize } = require('../../../models')

const Op = Sequelize.Op

let self = {}

self.createUser = async (req, res) => {
    try {
        const { body } = req

        if (!body.userName || !body.email || !body.password) {
            return res.status(402).send({
                message: "content can't be empty",
            })
        }

        const newUser = {
            userName: body?.userName,
            email: body?.email,
            password: body?.password,
        }

        const data = await user.create(newUser)

        return res.status(200).send({
            message: 'Success create new user',
        })
    } catch (error) {
        return res.status(500).send({
            message: error,
        })
    }
}

module.exports = self
