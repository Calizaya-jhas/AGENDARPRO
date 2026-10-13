const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer datos JSON en peticiones POST si lo necesitas
app.use(express.json());

// Servir todos los archivos estáticos de la carpeta actual
app.use(express.static(path.join(__dirname)));

// Ruta principal que carga la interfaz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor de AGENDARPRO corriendo en http://localhost:${PORT}`);
});