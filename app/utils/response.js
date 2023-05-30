const responseJson = (res, statusCode = 200, message = '', data = null) => {
    return res.status(statusCode).send({
        meta: {
            statusCode,
            message,
        },
        data,
    })
}

module.exports = responseJson
