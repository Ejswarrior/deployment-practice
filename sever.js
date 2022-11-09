require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (res, req) => {
res.setEncoding("Hello")


})

app.listen(process.env.PORT)

module.exports = app;