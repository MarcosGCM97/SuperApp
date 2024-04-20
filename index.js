const express = require('express')
const app = express()
const axios = require('axios')
const cors  = require('cors')

app.use(express.json())
app.use(cors())

let notes = [
    {
        "id": "1",
        "task": "ir de compras",
        "completed": false
    },
    {
        "id": "2",
        "task": "ir por faso",
        "completed": true
    },
    {
        "id": "3",
        "task": "lavar ropa",
        "completed": true
    }
    
   
]
let persons = [
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": "4"
    }
]
let weather = [
    {
        newWeather: 'francia'
    }
]


const generateID = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const lengthId = 8

    let id = '';
    
    for (let i = 0; i < lengthId; i++) {
        const randomChar = Math.floor(Math.random() * chars.length);
        id += chars.charAt(randomChar);
    }
    
    return id
}

app.get('/', (request, response) => {
    response.send('<h1>Hello</h1>')
})

//solicitudes a WeatherAPI
app.get('/api/weather', async (request, response) => {
    response.json(weather)
})
app.post('/api/weather', async (request, response) => {
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

//solicitudes a ToDoApp
app.get('/api/notes', (request, response) => {

    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const data = notes.find(note => note.id === id)

    if (data) {
        response.json(data)
      } else {
        response.status(404).end()
      }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

app.post('/api/notes', (request, response) => {
    const data = request.body

    data.completed === false 
        ? data.id = generateID()
        : data.id= data.id
        
    notes = notes.concat(data)

    response.json(notes)
})

app.put('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const updateNote = request.body

    notes = notes.filter(note => note.id !== id)
    notes.push(updateNote)
    console.log(notes)
    response.json(notes)
})

//solicitudes a PhonebookApp
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const data = persons.find(note => note.id === id)

    if (data) {
        response.json(data)
      } else {
        response.status(404).end()
      }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(note => note.id !== id)

    response.status(204).end()
})


app.post('/api/persons', (request, response) => {
    const data = request.body

    const newPerson = {
        name: data.name,
        number: data.number,
        id: generateID()
    }
    persons = persons.concat(newPerson)
    
    response.json(persons)
})

app.put('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const updatePerson = request.body

    persons = persons.filter(note => note.id !== id)
    persons.push(updatePerson)
    console.log(persons)
    response.json(persons)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
