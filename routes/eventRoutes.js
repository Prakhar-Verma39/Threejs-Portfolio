const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync.js');
const ExpressError = require('../utils/ExpressError.js');

const Events = require('../models/event.js');

const {eventSchema} = require('../schemas.js')

const validateEvent = (req, res, next) => {
    const { error } = eventSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
}


router.get('/', catchAsync(async (req, res) => {
    const events = await Events.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('events/index', { events });
}));

router.get('/new', (req, res) => {
    res.render('events/new');
})

router.post('/', validateEvent, catchAsync(async (req, res) => {
    const newEvent = new Events(req.body.event);
    await newEvent.save();
    res.redirect(`/events/${newEvent._id}`);
}));

router.get('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id)
    res.render('events/show', { event })
}));

router.get('/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id);
    res.render('events/edit', { event })
}));

router.put('/:id', validateEvent, catchAsync(async (req, res) => {
    const { id } = req.params;
    const event = await Events.findByIdAndUpdate(id, {...req.body.event});
    res.redirect(`/events/${event._id}`);
}));


router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteNews = await Events.findByIdAndDelete(id);
    res.redirect('/events');
}));

module.exports = router;