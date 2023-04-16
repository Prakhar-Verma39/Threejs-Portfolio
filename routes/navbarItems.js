const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync.js');
const ExpressError = require('../utils/ExpressError.js');

const NavbarItems = require('../models/navbarItem.js');

const {navbarItemSchema} = require('../schemas.js')

const validateNavbarItem = (req, res, next) => {
    const { error } = navbarItemSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
}


router.get('/', catchAsync(async (req, res) => {
    const navbarItems = await NavbarItems.find({}).limit(10).sort({updatedAt: 'desc'})
    res.render('navbarItems/index', { navbarItems });
}));

router.get('/new', (req, res) => {
    res.render('navbarItems/new', {limit: 2});
})

router.post('/', validateNavbarItem, catchAsync(async (req, res) => {
    const newNavbarItem = new NavbarItems(req.body.navbarItem);
    await newNavbarItem.save();
    res.redirect(`/navbarItems/${newNavbarItem._id}`);
}));

router.get('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const navbarItem = await NavbarItems.findById(id)
    res.render('navbarItems/show', { navbarItem })
}));

router.get('/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const navbarItem = await NavbarItems.findById(id);
    res.render('navbarItems/edit', { navbarItem, limit: 2 })
}));

router.put('/:id',  validateNavbarItem, catchAsync(async (req, res) => {
    const { id } = req.params;
    const navbarItem = await NavbarItems.findByIdAndUpdate(id, {...req.body.navbarItem});
    
    res.redirect(`/navbarItems/${navbarItem._id}`);
}));

router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteNavbarItem = await NavbarItems.findByIdAndDelete(id);
    res.redirect('/navbarItems');
}));

module.exports = router;

