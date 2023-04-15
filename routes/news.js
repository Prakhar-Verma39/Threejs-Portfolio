const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync.js');
const ExpressError = require('../utils/ExpressError.js');

const News = require('../models/news.js');

const {newsSchema} = require('../schemas.js')

const validateNews = (req, res, next) => {
    const { error } = newsSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
}


router.get('/', catchAsync(async (req, res) => {
    const news = await News.find({}).limit(6).sort({updatedAt: 'desc'})
    res.render('news/index', { news });
}));

router.get('/new', (req, res) => {
    res.render('news/new');
})

router.post('/', validateNews, catchAsync(async (req, res) => {
    const newNews = new News(req.body.aNews);
    await newNews.save();
    res.redirect(`/news/${newNews._id}`);
}));

router.get('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const aNews = await News.findById(id)
    res.render('news/show', { aNews })
}));

router.get('/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const aNews = await News.findById(id);
    res.render('news/edit', { aNews })
}));

router.put('/:id', validateNews, catchAsync(async (req, res) => {
    const { id } = req.params;
    const aNews = await News.findByIdAndUpdate(id, {...req.body.aNews});
    res.redirect(`/news/${aNews._id}`);
}));

router.delete('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteNews = await News.findByIdAndDelete(id);
    res.redirect('/news');
}));

module.exports = router;