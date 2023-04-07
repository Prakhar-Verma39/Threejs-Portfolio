const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const {newsSchema, announcementSchema, eventSchema} = require('./schemas.js')
const catchAsync = require('./utils/catchAsync.js');
const ExpressError = require('./utils/ExpressError.js');
const News = require('./models/news');
const Announcements = require('./models/announcement');
const Events = require('./models/event');


mongoose.connect('mongodb://127.0.0.1:27017/IPS');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const validateNews = (req, res, next) => {
    const { error } = newsSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
}
const validateAnnouncement = (req, res, next) => {
    const { error } = announcementSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
}
const validateEvent = (req, res, next) => {
    const { error } = eventSchema.validate(req.body);
    if(error){ 
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    }else{
        next();
    }
}


app.get('/', (req, res) => {
    res.render('dashboard')
});


//------------------------------------------- News routes starts----------------------------------------

app.get('/news', catchAsync(async (req, res) => {
    const news = await News.find({})
    res.render('news/index', { news });
}));

app.get('/news/new', (req, res) => {
    res.render('news/new');
})

app.post('/news', validateNews, catchAsync(async (req, res) => {
    const newNews = new News(req.body.aNews);
    await newNews.save();
    res.redirect(`/news/${newNews._id}`);
}));

app.get('/news/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const aNews = await News.findById(id)
    res.render('news/show', { aNews })
}));

app.get('/news/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const aNews = await News.findById(id);
    res.render('news/edit', { aNews })
}));

app.put('/news/:id', validateNews, catchAsync(async (req, res) => {
    const { id } = req.params;
    const aNews = await News.findByIdAndUpdate(id, {...req.body.aNews});
    res.redirect(`/news/${aNews._id}`);
}));

app.delete('/news/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteNews = await News.findByIdAndDelete(id);
    res.redirect('/news');
}));

//------------------------------------------- News routes ends----------------------------------------

//------------------------------------------- Announcements routes starts----------------------------------------


app.get('/announcements', catchAsync(async (req, res) => {
    const announcements = await Announcements.find({})
    res.render('announcements/index', { announcements });
}));

app.get('/announcements/new', (req, res) => {
    res.render('announcements/new');
})

app.post('/announcements', validateAnnouncement, catchAsync(async (req, res) => {
    const newAnnouncement = new Announcements(req.body.announcement);
    await newAnnouncement.save();
    res.redirect(`/announcements/${newAnnouncement._id}`);
}));

app.get('/announcements/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const announcement = await Announcements.findById(id)
    res.render('announcements/show', { announcement })
}));

app.get('/announcements/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const announcement = await Announcements.findById(id);
    res.render('announcements/edit', { announcement })
}));

app.put('/announcements/:id', validateAnnouncement, catchAsync(async (req, res) => {
    const { id } = req.params;
    const announcement = await Announcements.findByIdAndUpdate(id, {...req.body.announcement});
    res.redirect(`/announcements/${announcement._id}`);
}));

app.delete('/announcements/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteAnnouncement = await Announcements.findByIdAndDelete(id);
    res.redirect('/announcements');
}));

//------------------------------------------- Announcements routes ends----------------------------------------

//------------------------------------------- Events routes starts----------------------------------------

app.get('/events', catchAsync(async (req, res) => {
    const events = await Events.find({})
    res.render('events/index', { events });
}));

app.get('/events/new', (req, res) => {
    res.render('events/new');
})

app.post('/events', validateEvent, catchAsync(async (req, res) => {
    const newEvent = new Events(req.body.event);
    await newEvent.save();
    res.redirect(`/events/${newEvent._id}`);
}));

app.get('/events/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id)
    res.render('events/show', { event })
}));

app.get('/events/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const event = await Events.findById(id);
    res.render('events/edit', { event })
}));

app.put('/events/:id', validateEvent, catchAsync(async (req, res) => {
    const { id } = req.params;
    const event = await Events.findByIdAndUpdate(id, {...req.body.event});
    res.redirect(`/events/${event._id}`);
}));


app.delete('/events/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteNews = await Events.findByIdAndDelete(id);
    res.redirect('/events');
}));

//------------------------------------------- Events routes ends----------------------------------------

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

app.use((err, req, res, next) => {

    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('error', { err })
})

app.listen(5000, () => {
    console.log("ON PORT 5000!")
})






















