// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// CONTROLLERS
const bandsControler = require('./controllers/bands_controller')
app.use('/bands', bandsControler)

const eventsControler = require('./controllers/events_controller')
app.use('/events', eventsControler)

const stagesControler = require('./controllers/stages_controller')
app.use('/stages', stagesControler)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})