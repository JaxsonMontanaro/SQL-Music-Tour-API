// DEPENDENCIES
const stages = require('express').Router()
const db = require('../models')
const { stage } = db
const { Op } = require('sequelize')

// ENDPOINTS
stages.get('/', async (req, res) => {
    try {
        const foundstage = await stage.findAll({
            order: [['available_start_time', 'ASC']],
            where: { name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` } }
        })
        res.status(200).json(foundstage)
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR GETTING ALL STAGES')
    }
})

stages.get('/:id', async (req, res) => {
    try {
        const foundstage = await stage.findOne({ where: { stage_id: req.params.id } })
        res.status(200).json(foundstage)
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR GETTING ONE STAGE')
    }
})

stages.post('/', async (req, res) => {
    try {
        const newstage = await stage.create(req.body)
        res.status(200).json({ message: "Created a new stage!", data: newstage })
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR CREATING STAGES')
    }
})

stages.put('/:id', async (req, res) => {
    try {
        const updatedstage = await stage.update(
            req.body,
            { where: { stage_id: req.params.id } }
        )
        res.status(200).json({ message: `Updated ${updatedstage} stage!` })
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR UPDATING STAGES')
    }
})

stages.delete('/:id', async (req, res) => {
    try {
        const deletedstage = await stage.destroy({ where: { stage_id: req.params.id } })
        res.status(200).json({ message: `Successfully deleted stage id ${req.params.id}!` })
    } catch (err) {
        console.log(err)
        res.status(500).send('ERROR DELETING STAGES')
    }
})

// EXPORT
module.exports = stages