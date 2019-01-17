const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
    name: {type: String, required: true},
    hair_color: {type: String, required: true, default: 'blonde'},
    eye_color: {type: String, required: true},
    dob: {type: Date, required: true},
    loves: [{type: String, required: true}],
    location: {type: String, required: true},
    gender: {type: String, required: true},
    victims: {type: Number, required: true, min: 0}
});

const Vampire = mongoose.model('Vampire',vampireSchema);

module.exports = Vampire;