const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync.js');
const ExpressError = require('../utils/ExpressError.js');

const Announcements = require('../models/announcement.js');

const {announcementSchema} = require('../schemas.js')

const validateAnnouncement = (req, res, next) => {
    const { error } = announcementSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
}


router.get('/', catchAsync(async (req, res) => {
    const announcements = await Announcements.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('announcements/index', { announcements });
}));

router.get('/new', (req, res) => {
    res.render('announcements/new');
})

router.post('/', validateAnnouncement, catchAsync(async (req, res) => {
    const newAnnouncement = new Announcements(req.body.announcement);
    await newAnnouncement.save();
    res.redirect(`/announcements/${newAnnouncement._id}`);
}));

router.get('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const announcement = await Announcements.findById(id)
    res.render('announcements/show', { announcement })
}));

router.get('/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const announcement = await Announcements.findById(id);
    res.render('announcements/edit', { announcement })
}));

router.put('/:id', validateAnnouncement, catchAsync(async (req, res) => {
    const { id } = req.params;
    const announcement = await Announcements.findByIdAndUpdate(id, {...req.body.announcement});
    res.redirect(`/announcements/${announcement._id}`);
}));

router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteAnnouncement = await Announcements.findByIdAndDelete(id);
    res.redirect('/announcements');
}));

module.exports = router;