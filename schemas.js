const Joi = require('joi');

module.exports.newsSchema = Joi.object({
    aNews: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        pdfUrl: Joi.string().required()
        
    }).required()
});
module.exports.announcementSchema = Joi.object({
    announcement: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        pdfUrl: Joi.string().required()
        
    }).required()
});
module.exports.eventSchema = Joi.object({
    event: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        pdfUrl: Joi.string().required()
        
    }).required()
});