const mongoose = require('mongoose')

//const password = 'superapp'
//const url = `mongodb+srv://marcoscongregado:${password}@cluster0.fuoswgv.mongodb.net/`
mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI
console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

const toDoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: Boolean
})

toDoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const ToDo = mongoose.model('ToDo', toDoSchema)

module.exports = ToDo