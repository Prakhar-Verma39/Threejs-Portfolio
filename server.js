const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');

const news = require('./routes/newsRoutes');
const announcements = require('./routes/announcementRoutes');
const events = require('./routes/eventRoutes.js');


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






app.get('/', (req, res) => {
    res.render('dashboard')
});


//------------------------------------------- News routes starts----------------------------------------
app.use('/news', news)
//------------------------------------------- News routes ends----------------------------------------

//------------------------------------------- Announcements routes starts----------------------------------------
app.use('/announcements', announcements)
//------------------------------------------- Announcements routes ends----------------------------------------

//------------------------------------------- Events routes starts----------------------------------------
app.use('/events', events)
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






















