const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "Sapoli@naggin1",
    port: "5432"
});

module.exports = pool