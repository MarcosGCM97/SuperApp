const RouterPersons = require('express').Router()
//const Person = require('../models/person')

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

let persons = [
    {
        name: 'Marcos',
        number: '3355482215546',
        id: generateID()
    }
]

RouterPersons.get('/', (request, response) => {
    response.json(persons)
})

RouterPersons.get('/:id', (request, response) => {
    const id = request.params.id
    const data = persons.find(note => note.id === id)

    if (data) {
        response.json(data)
      } else {
        response.status(404).end()
      }
})

RouterPersons.delete('/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(note => note.id !== id)

    response.status(204).end()
})


RouterPersons.post('/', (request, response) => {
    const data = request.body

    const newPerson = {
        name: data.name,
        number: data.number,
        id: generateID()
    }
    persons = persons.concat(newPerson)
    
    response.json(persons)
})

RouterPersons.put('/:id', (request, response) => {
    const id = request.params.id
    const updatePerson = request.body

    persons = persons.filter(note => note.id !== id)
    persons.push(updatePerson)
    console.log(persons)
    response.json(persons)
})

module.exports = RouterPersons