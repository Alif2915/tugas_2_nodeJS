const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('express');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub2');

const db = mongoose.connection;

const apiRouter = require('./api-routes');

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})