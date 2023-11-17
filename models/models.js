import client from "../config/Database"


const result = await client.query('SELECT * FROM users')

export default result