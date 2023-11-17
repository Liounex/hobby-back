import express from 'express'

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send({ "message": "Hola mundo Cambiado cambio desde vercel por 2da vez haber si funciona si funcionao" })
})

app.get('/api/data', async (req, res) => {
    try {
        res.send(result.rows);
    } catch (error) {
        console.error('Error al obtener datos:', error)
        res.status(500).json({ error: 'No se pudieron obtener los datos.' })
    }
})

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
})
