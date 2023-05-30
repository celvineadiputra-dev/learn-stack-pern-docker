const bcrypt = require('bcrypt')
const saltRounds = 10
const hash = async (plainText) => {
    return await bcrypt.hash(plainText, saltRounds).then((hash) => {
        console.log(hash)
        return hash
    })
}

const compare = (plainText, hash) => {
    return bcrypt
        .compare(plainText, hash)
        .then((res) => {
            return res
        })
        .catch((error) => {
            return error
        })
}

module.exports = {
    hash,
    compare,
}
