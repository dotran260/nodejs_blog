const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Add https://www.npmjs.com/package/mongoose-slug-generator
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Course = new Schema({
    name: { type: String, require: true },
    description: { type: String, maxLength: 500 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, require: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);