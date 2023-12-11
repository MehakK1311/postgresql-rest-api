const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: process.env.PSQL_PSWD,
    port: "5432"
});

module.exports = pool