const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ error: 'unknown endpoint' })

    next()
}

const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if(error.name === 'CastError'){
        response.status(400).send({ error: 'malformated id' })
    } else if(error.name === 'ValidationError'){
        return response.status(400).json({ error: error.message })
    }

    next()
}

module.exports = {
    errorHandler,
    unknownEndpoint
}