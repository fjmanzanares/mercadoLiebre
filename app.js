const express = require('express');
const path = require('path');

const app = express();

const session = require('express-session');

app.use( express.static(path.resolve(__dirname, './public')) );

app.listen(3000, () =>  console.log("Servidor corriendo desde el puerto 3000"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/index.html'));
});

app.use(session({secret: 'Shhhhhhhh'}));