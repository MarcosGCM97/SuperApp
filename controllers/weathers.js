const RouterWeathers = require('express').Router()
//const Weather = require('../models/weathes')
const axios = require('axios')


RouterWeathers.get('/', async (request, response) => {
    response.json(weather)
})
RouterWeathers.post('/', async (request, response) => {
    const data = await request.body
    
    const location = data.newWeather
    try{
        const APIweatherKey = '0f505a3141a1da81ea3de947f8382b60'
        const url = `http://api.weatherstack.com/current?access_key=${APIweatherKey}&query=${location}`;
    
        const res = await axios.get(url)
        weather = res.data
    
        response.json(weather)
    } catch(error) {
        console.log(error)
    }
    
})

module.exports = RouterWeathers