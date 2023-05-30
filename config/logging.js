const winston = require('winston')
const DailyRotateFile = require('winston-daily-rotate-file')

const opts = {
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '1d',
}

const authLogger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new DailyRotateFile({
            filename: 'storage/logs/auth/auth-%DATE%.log',
            ...opts,
        }),
    ],
})

module.exports = {
    authLogger,
}
