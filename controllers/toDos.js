const RouterToDos = require('express').Router()
const ToDo = require('../models/toDo')

RouterToDos.get('/', async (request, response, next) => {
    try{
        const toDos = await ToDo.find({})
        response.json(toDos)
    }
    catch(error){
        next(error)
    }
})

RouterToDos.get('/:id', async (request, response, next) => {
    const id = request.params.id
    try{
    const toDo = await ToDo.findById(id)
    if(toDo) {
        response.json(toDo)
    } else {
        response.status(404).end()
    }
    }
    catch(error) {
        next(error)
    }
})

RouterToDos.delete('/:id', async (request, response, next) => {
    const id = request.params.id 

    try{
        await ToDo.findByIdAndDelete(id)
        response.status(204).end()
    }
    catch(error){
        next(error)
    }
})

RouterToDos.post('/', async (request, response, next) => {
    const body = request.body

    try{
        if(!body.task){
            return response.status(400).json({ error: 'content missing' })
        }
    
        const toDo = new ToDo({
            task: body.task,
            completed: body.completed || false
        })
    
        const savedToDo = await toDo.save()
        response.json(savedToDo)
    }
    catch(error){
        next(error)
    }
})

RouterToDos.put('/:id', async (request, response, next) => {
    const id = request.params.id
    const { task, completed } = request.body

    try{
        const updateToDo = await ToDo.findByIdAndUpdate(id, 
            { task, completed },
            { new: true, runValidators: true, context: 'query' })
        response.json(updateToDo)
    }
    catch (error){
        next(error)
    }
})


module.exports = RouterToDos