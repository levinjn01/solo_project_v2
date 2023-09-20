//require PostgreSQL module so we can interact with ElephantSQL
const { Pool } = require ('pg');

//connection string
const PG_URI = 'postgres://gcgzyfad:8hGq4wUf2uNb8fBfAdIxMNjAotEThMeD@berry.db.elephantsql.com/gcgzyfad'

//create a new pool
const pool = new Pool({
    connectionString: PG_URI
  });

//exporting object with query function that logs the text of the SQL query and returns everything
module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
  };