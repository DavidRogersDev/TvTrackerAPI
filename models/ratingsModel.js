const mongoose = require('mongoose');

const { Schema } = mongoose;

const ratingsModel = new Schema({
    Source: { type: String },
    Value: { type: String }
});

module.exports = mongoose.model('Ratings', ratingsModel);
