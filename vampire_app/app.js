// 1. Require your node modules

const mongoose = require('mongoose');


// 2. Require your model (and possibly your extra data source);

const Vampire = require('./models/vampire.js');
const vampireData = require('./populateVampires');
// 3. Connect your database and collection name

const connectionString = 'mongodb://localhost/vampire-db';

// 4. Open your mongoose connection

mongoose.connect(connectionString);

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

Vampire.collection.insertMany(vampireData, (err,data)=>{
    console.log('added provided vampire data');
    mongoose.connection.close();
})

// ### Add some new vampire data

Vampire.collection.insertMany([{
    name: 'Nightwalker',
    hair_color: 'blue',
    eye_color: 'grey',
    dob: new Date(1988, 9, 3, 19, 12),
    loves: ['bread','blood'],
    location: 'Buffalo, NY',
    gender: 'm',
    victims: 8
},{
    name: 'Blade',
    hair_color: 'black',
    eye_color: 'brown',
    dob: new Date(1970, 9, 3, 19, 12),
    loves: ['Kris Kristoffersen','justice'],
    location: 'Chicago',
    gender: 'm',
    victims: 300
},{
    name: 'Priscilla Presley',
    hair_color: 'jet',
    eye_color: 'emerald',
    dob: new Date(1945, 05, 24, 19,12),
    loves: ['bacon','peanut butter'],
    location: 'Graceland',
    gender: 'f',
    victims: 1
},{
    name: 'Aaliyah',
    hair_color: 'brown',
    eye_color: 'gold',
    dob: new Date(3500, 1, 1, 19,12),
    loves: ['Pharaoh','independence'],
    location: 'Cairo, Egypt',
    gender: 'f',
    victims: 30000
}], (err,data)=>{
    console.log('added provided vampire data');
    mongoose.connection.close();
})

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
