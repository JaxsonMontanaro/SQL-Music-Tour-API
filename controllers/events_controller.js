// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const { event } = db
const { Op } = require('sequelize')

// ENDPOINTS
events.get('/', async (req, res) => {
    try {
        const foundevents = await event.findAll({
            order: [['available_start_time', 'ASC']],
            where: { name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` } }
        })
        res.status(200).json(foundevents)
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR GETTING ALL EVENTS')
    }
})

events.get('/:id', async (req, res) => {
    try {
        const foundevent = await event.findOne({ where: { event_id: req.params.id } })
        res.status(200).json(foundevent)
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR GETTING ONE EVENT')
    }
})

events.post('/', async (req, res) => {
    try {
        const newevent = await event.create(req.body)
        res.status(200).json({ message: "Created a new event!", data: newevent })
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR CREATING EVENTS')
    }
})

events.put('/:id', async (req, res) => {
    try {
        const updatedevents = await event.update(
            req.body,
            { where: { event_id: req.params.id } }
        )
        res.status(200).json({ message: `Updated ${updatedevents} events!` })
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR UPDATING EVENTS')
    }
})

events.delete('/:id', async (req, res) => {
    try {
        const deletedevent = await event.destroy({ where: { event_id: req.params.id } })
        res.status(200).json({ message: `Successfully deleted event id ${req.params.id}!` })
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR DELETING EVENTS')
    }
})

// EXPORT
module.exports = events