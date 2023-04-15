const mongoose = require('mongoose');

const News = require('./models/news');
const Announcements = require('./models/announcement');
const Events = require('./models/event');
const NavbarItems = require('./models/navbarItem');

mongoose.connect('mongodb://127.0.0.1:27017/IPS')
 .then(() => {
    console.log("CONNECTION OPEN!!!")
 })
.catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)
})

const seedNews =[
    {
        title: 'news title 1',
        description: 'this is description of news 1',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'news title 2',
        description: 'this is description of news 2',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'news title 3',
        description: 'this is description of news 3',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'news title 4',
        description: 'this is description of news 4',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'news title 5',
        description: 'this is description of news 5',
        pdfUrl: 'https://www.w3schools.com/'
    }
]

News.insertMany(seedNews)  
                                 
    .then(res => {
    })
    .catch(err => {
        console.log(err)
    })
const seedAnnouncements =[
    {
        title: 'announcement title 1',
        description: 'this is description of announcement 1',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'announcement title 2',
        description: 'this is description of announcement 2',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'announcement title 3',
        description: 'this is description of announcement 3',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'announcement title 4',
        description: 'this is description of announcement 4',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'announcement title 5',
        description: 'this is description of announcement 5',
        pdfUrl: 'https://www.w3schools.com/'
    }
]

Announcements.insertMany(seedAnnouncements)  
                                 
    .then(res => {
    })
    .catch(err => {
        console.log(err)
    })
const seedEvents =[
    {
        title: 'event title 1',
        description: 'this is description of event 1',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'event title 2',
        description: 'this is description of event 2',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'event title 3',
        description: 'this is description of event 3',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'event title 4',
        description: 'this is description of event 4',
        pdfUrl: 'https://www.w3schools.com/'
    },
    {
        title: 'event title 5',
        description: 'this is description of event 5',
        pdfUrl: 'https://www.w3schools.com/'
    }
]

Events.insertMany(seedEvents)  
                                 
    .then(res => {
    })
    .catch(err => {
        console.log(err)
    })


const seedNavbarItems =[
    {
        "item": "Home",
        "link": "/",
        "subItems": [],
        "subLinks": []      
    },
    {
        "item": "About",
        "link": "/about",
        "subItems": [],
        "subLinks": []
    },
    {
        "item": "Centres",
        "link": "#",   
        "subItems": ["Centre of Computer Education","Centre of Fashion & Design Technology", "Centre of Food Technology", "Centre of Media Studies"],
        "subLinks": ["/home/cce", "/home/cfdt", "/home/cft", "/home/cms"]
    },
    {
        "item":  "Student",
        "link": "/student",   
        "subItems": [],
        "subLinks": []
    },
    {
        "item":  "Gallery",
        "link": "/gallery",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Admission",
        "link": "/admission",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Newsletter",
        "link": "/newsletter",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Contact Us",
        "link": "/contactus",
        "subItems": [],
        "subLinks": []   
    },
    {
        "item":  "Alumni",
        "link": "/alumni",
        "subItems": [],
        "subLinks": []   
    }
]

NavbarItems.insertMany(seedNavbarItems)  
                                 
    .then(res => {
    })
    .catch(err => {
        console.log(err)
    })
