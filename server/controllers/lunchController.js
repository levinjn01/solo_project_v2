//import database
const db = require('../models/lunchModel');

//empty object to contain our controller functions
const lunchController = {};

//GET function - retrieves a randomized restaurant from the total array and adds it to local storage
lunchController.getLunch = (req, res, next) => {
    const text = 'SELECT id=1 FROM restaurants';

    db
    .query(text)
    .then(result => {
        res.locals.lunch = result; //***need to find out what result is so I can filter it
        console.log('this is the query result', result)
        next();
    })
    .catch(err => next({
        log: 'Couldn\'t deliver lunch to you!',
        status: 400,
        message: `lunchesController.getLunch ERROR: ${err}`
    }))
}

module.exports = lunchController;