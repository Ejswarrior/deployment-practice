require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (res, req) => {
res.send("Hello")


})

app.listen(process.env.PORT)

module.exports = app;