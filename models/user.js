'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    user.init(
        {
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                minLength: 3,
                validate: {
                    notNull: {
                        message: 'Please enter your userName',
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                isEmail: true,
                validate: {
                    notNull: {
                        msg: 'Please enter your email',
                    },
                    isEmail: {
                        msg: 'Please enter valid email',
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                min: 8,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Please enter your password',
                    },
                    min: {
                        msg: 'Minimum character 8',
                    },
                },
            },
        },
        {
            sequelize,
            modelName: 'user',
        }
    )
    return user
}
