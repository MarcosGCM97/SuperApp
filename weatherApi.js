const express = require('express');
const router = express.Router();



router.get('/api/weather', (request, response) => {
    response.send('conexion exitosa')
})

module.exports = router;