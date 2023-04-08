
const { Pool } = require('pg');
const PG_URI =
  'postgres://dvydrfmx:E4c39S_41mmFGhFvHD9XFAVgnvfHM_wI@heffalump.db.elephantsql.com/dvydrfmx';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executing',text);
    return pool.query(text, params, callback);
  },
};
