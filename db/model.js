const { query } = require('express');
const { Pool } = require('pg');
const PGURI =
  'postgres://dvydrfmx:E4c39S_41mmFGhFvHD9XFAVgnvfHM_wI@heffalump.db.elephantsql.com/dvydrfmx';

const pool = new Pool({
  connectionString: PGURI,
});

module.exports({
  query: (text, params, callback) => {
    console.log(text);
    return pool.query(text, params, callback);
  },
});
