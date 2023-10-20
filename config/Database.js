const { Pool } = require('pg')

const connectionString = process.env.POSTGRES_URL + "?sslmode=require";
console.log("Cadena de conexión a PostgreSQL:", connectionString);

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_PASSWORD,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

module.exports = pool
