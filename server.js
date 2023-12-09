const sh = require('superheroes');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello superhero ' + sh.random())
});

app.listen(3000, () => console.log('Example app is listening on port 3000.\nOpen http://localhost:3000/ in your browser.'));
