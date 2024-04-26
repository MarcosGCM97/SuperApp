const RouterPersons = require('express').Router()
const Person = require('../models/person')


RouterPersons.get('/', async (request, response, next) => {
    try{
        const persons = await Person.find({})
        response.json(persons)
    }
    catch(error){
        next(error)
    }
})

RouterPersons.get('/:id', async (request, response, next) => {
    const id = request.params.id

    try{
        const person = Person.findById(id)
        if(person){
            response.json(person)
        }
        else{
            response.status(404).end()
        }
    }
    catch(error){
        next(error)
    }
})

RouterPersons.delete('/:id', async(request, response, next) => {
    const id = request.params.id
    
    try{
        await Person.findByIdAndDelete(id)
        response.status(204).end()
    }
    catch(error){
        next(error)
    }
})


RouterPersons.post('/', async (request, response, next) => {
    const body = request.body

    try{
        if(!body.name){
            return response.status(400).json({ error: 'content missing' })
        }
    
        const newPerson = new Person({
            name: body.name,
            number: body.number
        })
        
        const savedPerson = await newPerson.save()
        response.json(savedPerson)
    }
    catch(error){
        next(error)
    }
})

RouterPersons.put('/:id', async (request, response, next) => {
    const id = request.params.id
    const { name, number } = request.body

    try{
        const updatePerson = await Person.findByIdAndUpdate(id,
            { name, number },
            { new: true, runValidators: true, context: 'query' })
        response.json(updatePerson)    
    }
    catch(error){
        next(error)
    }
})

module.exports = RouterPersons