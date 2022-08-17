// chercher dans node module
const express = require('express');


// utilisationd des fonctions express
const app = express();

app.listen('3000',() => {
    console.log('serveur lancé sur le port 3000');
});