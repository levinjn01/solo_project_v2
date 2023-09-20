//sets up the express server and gives error handling
const path = require('path');
const express = require('express');
const app = express();
// const apiRouter = require('./routes/api');
const lunchController = require('./controllers/lunchController');

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files: CSS, JS, images
 */
// app.use(express.static(path.resolve(__dirname, '../client')));

/**
 * define route handlers
 */

app.get('/getlunch', lunchController.getLunch, (req, res) => {
    console.log('you reached the getlunch ')
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;