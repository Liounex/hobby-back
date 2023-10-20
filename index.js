const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Crear un objeto JSON como respuesta
    const jsonResponse = { message: 'Hola, mundo!' };

    // Enviar la respuesta como JSON
    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
