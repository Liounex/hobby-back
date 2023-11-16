// const express = require('express')
import express from 'express'
//const pool = require('./config/Database.js')
import pool from './config/Database.js'

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send({ "message": "Hola mundo Cambiado cambio desde github si funcionao" })
})

app.get('/api/data', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users')
        client.release()

        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener datos:', error)
        res.status(500).json({ error: 'No se pudieron obtener los datos.' })
    }
})


app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
})
