//import database
const db = require('../models/lunchModel');

//empty object to contain our controller functions
const lunchController = {};

lunchController.number;

//GET function - retrieves a randomized restaurant from the total array and adds it to local storage
lunchController.getLunch = (req, res, next) => {
    const text = 'SELECT * FROM restaurants';
    const randomNum = num => {
        return Math.floor(Math.random() * num);
    }

    db
    .query(text)
    .then(result => {
        // console.log('we are in the .then query', result);
        lunchController.number = result.rows.length;
        res.locals.lunch = result.rows[randomNum(lunchController.number)]; // this is an object
        next();
    })
    .catch(err => next({
        log: 'Couldn\'t deliver lunch to you!',
        status: 400,
        message: `lunchesController.getLunch ERROR: ${err}`
    }))
}

lunchController.addLunch = (req, res, next) => {
    const { name, address, hours_and_days} = req.body;
    console.log('request body is', req.body);
    lunchController.number++;
    const text = 'INSERT INTO restaurants VALUES ($1, $2, $3, $4)';
    const values = [lunchController.number, name, address, hours_and_days];
    console.log('Inside lunchController');
    console.log('values are', values);

    db
    .query(text, values)
    .then(result => next())
    .catch(err => next({
        log: 'Couldn\'t add to the database!',
        status: 400,
        message: `lunchesController.update ERROR: ${err}`
    }))
}

module.exports = lunchController;