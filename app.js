const express = require('express')
const cors = require('cors')
const { PORT } = require('./config/env')

const userRouter = require('./routes/userRoute')

const app = express()

app.use(cors())
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use('/', userRouter)

app.listen(PORT, () => {
    console.log(`App listening on port : ${PORT}`)
})
