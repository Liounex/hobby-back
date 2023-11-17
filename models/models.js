import client from "../config/Database.js"


const result = await client.query('SELECT * FROM users')

export default result