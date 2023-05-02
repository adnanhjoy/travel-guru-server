const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;


app.use(cors())

const category = require('./categories.json');
const destinations = require('./destination.json');

app.get('/', (req, res) => {
    res.send('Travel Guru Server Running')
})

app.get('/categories', (req, res) => {
    res.send(category)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const categoryNews =  category.filter(n => n.id === id)
    res.send(categoryNews)
})

app.get('/destination', (req, res) => {
    res.send(destinations);
})

app.listen(port, () => {
    console.log('Travel Guru Server Running Port', port)
})