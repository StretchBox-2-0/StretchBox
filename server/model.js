const { Pool } = require('pg');

const PG_URI = 'postgres://tjpgpggd:rxit55StLb5JTHYSpLAo6Gy6gRDaeaL6@jelani.db.elephantsql.com/tjpgpggd';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('query executed', text);
    return pool.query(text, params, callback);
  }
};