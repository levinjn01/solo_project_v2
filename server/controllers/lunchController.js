//import database
const db = require('../models/lunchModel');

//empty object to contain our controller functions
const lunchController = {};

//GET function - retrieves a randomized restaurant from the total array and adds it to local storage
lunchController.getLunch = (req, res, next) => {
    const text = 'SELECT * FROM restaurants';
    const random = Math.floor(Math.random() * 3)

    db
    .query(text)
    .then(result => {
        // console.log('we are in the .then query', result);
        res.locals.lunch = result.rows[random]; // this is an object
        next();
    })
    .catch(err => next({
        log: 'Couldn\'t deliver lunch to you!',
        status: 400,
        message: `lunchesController.getLunch ERROR: ${err}`
    }))
}

module.exports = lunchController;