const express = require('express')
const app = express()
const RouterToDos = require('./controllers/toDos')
const RouterPersons = require('./controllers/persons')
const RouterWeathers = require('./controllers/weathers')
const cors  = require('cors')
const path = require('path')
const middleware = require('./utils/middleware')


app.use('/_next', express.static(path.join(__dirname, '.next')))
app.use(express.json())
app.use(cors())


app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '.next', 'server', 'app', 'index.html'))
})
app.use('/api/toDos', RouterToDos)
app.use('/api/persons', RouterPersons)
app.use('/api/weathers', RouterWeathers)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)


module.exports = app
