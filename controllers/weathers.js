const RouterWeathers = require('express').Router()
//const Weather = require('../models/weathes')
const axios = require('axios')


RouterWeathers.get('/', async (request, response) => {
    await response.json(weather)
})
RouterWeathers.post('/', async (request, response) => {
    const data = await request.body
    
    const location = data.newWeather
    try{
        const APIweatherKey = process.env.API_WEATHER_KEY
        const url = `http://api.weatherstack.com/current?access_key=${APIweatherKey}&query=${location}`;
    
        const res = await axios.get(url)
        weather = res.data
    
        response.json(weather)
    } catch(error) {
        console.log(error)
    }
    
})

module.exports = RouterWeathers