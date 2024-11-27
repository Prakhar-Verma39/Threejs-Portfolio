import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    ips,
    yelpcamp,
    objectdetection,
    powerapp,
    git,
    figma,
    xrmlabs,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Dynamics CRM Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "powerapp",
        icon: powerapp,
    },
];

const experiences = [
    {
        title: "Dynamics CRM Developer",
        company_name: "XRM Labs",
        icon: xrmlabs,
        iconBg: "#383E56",
        date: "December 2023 - Present",
        points: [
            "Developed JavaScript solutions for automation, including dynamic field updates and validation.",
            "Automated parent-child data flows for CSV imports, improving data entry efficiency.",
            "Troubleshot Power Automate workflows, SharePoint integrations, and PowerApps plugins.",
            "Collaborated on bug fixes and feature enhancements for group visibility and custom filters.",
            "Led data migration and cleansing, ensuring high accuracy in communication and loan data.",
            "Facilitated client and team meetings to align on project requirements and updates.",
            "Designed custom controls(PCF) and field mappings to enhance user experience.",
        ],
    },

];

// const testimonials = [
//     {
//         testimonial:
//             "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//         name: "Sara Lee",
//         designation: "CFO",
//         company: "Acme Co",
//         image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//         testimonial:
//             "I've never met a web developer who truly cares about their clients' success like Rick does.",
//         name: "Chris Brown",
//         designation: "COO",
//         company: "DEF Corp",
//         image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//         testimonial:
//             "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//         name: "Lisa Wang",
//         designation: "CTO",
//         company: "456 Enterprises",
//         image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
// ];

const projects = [
    {
        name: "Website development for IPS, UoA",
        description:
            "The website is intended to serve as a platform to disseminate information about the institute to the public, including students, faculty, staff, and other stakeholders.",
        tags: [
            {
                name: "ejs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: ips,
        source_code_link: "https://github.com/Prakhar-Verma39/Institute-of-Professional-Studies-forked-#in-this-project-a-website-was-designed-for-the-institute-of-professional-studies-university-of-allahabad-the-team-consists-of-two-members-namely-prakhar-verma-and-vivek-maurya",
    },
    {
        name: "YelpCamp",
        description:
            "A campground review website where users can explore and rate various campgrounds. It allows users to post reviews, share experiences, and view campground information, fostering a community of outdoor enthusiasts.",
        tags: [
            {
                name: "bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "mongoose",
                color: "pink-text-gradient",
            },
        ],
        image: yelpcamp,
        source_code_link: "https://github.com/Prakhar-Verma39/YelpCamp",
    },
    {
        name: "Object Detection",
        description:
            "Waste Management based project, uses a fast real-time object detector to classify and localize objects present in a live feed through a webcam, which will help in segregation. It can also be used in autonomous surveillance during ban.",
        tags: [
            {
                name: "deep-learning",
                color: "blue-text-gradient",
            },
            {
                name: "darknet-yolo",
                color: "green-text-gradient",
            },
            {
                name: "opencv",
                color: "pink-text-gradient",
            },
        ],
        image: objectdetection,
        source_code_link: "https://github.com/Prakhar-Verma39/Object-Detection#object-detection",
    },
];

export { services, technologies, experiences, projects };