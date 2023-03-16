const express = require('express');
const path = require('path');
const app = express()

const users = [];
app.get('/users', (req, res) => {
    res.json(users)
});

app.post('/users', (req, res) => {

})
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
});

app.listen(3000);

