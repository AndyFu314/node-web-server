const express = require('express');

var app = express();

app.get('/', (request, response) => {
    response.send({
        name: 'Andy',
        likes: [
            'Jogging',
            'Movie'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('<h1>About page.</h1>')
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Oops! Something error...'
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!')
});