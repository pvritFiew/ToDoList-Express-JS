const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Events = require('../model/Event');

// GET all events
router.get('/', async (req, res, next) => {
    try {
        const events = await Events.find();
        res.json(events);
    } catch (err) {
        next(err);
    }
});

// GET a single event by ID
router.get('/:id', async (req, res, next) => {
    try {
        const event = await Events.findById(req.params.id);
        res.json(event);
    } catch (err) {
        next(err);
    }
});

// POST a new event
router.post('/', async (req, res, next) => {
    try {
        const event = new Events(req.body);
        const result = await event.save();
        res.json(result);
    } catch (err) {
        next(err);
    }
});

// UPDATE an existing event by ID
router.put('/:id', async (req, res, next) => {
    try {
        const event = await Events.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(event);
    } catch (err) {
        next(err);
    }
});

// DELETE an event by ID
router.delete('/:id', async (req, res, next) => {
    try {
        const event = await Events.findByIdAndDelete(req.params.id);
        res.json(event);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
