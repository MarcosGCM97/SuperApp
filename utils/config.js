require('dotenv').config()
const process = require('process')

const PORT = process.env.PORT
const url = process.env.MONGODB_URI

module.exports = {
    PORT,
    url
}