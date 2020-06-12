const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
//const db = mongoose.connect('mongodb://192.168.1.110:27017/tvshowtracker', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connect('mongodb+srv://dave:890iop)P@kesselrundb-v4cz9.mongodb.net/tvshowtracker?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 80;
const TvShow = require('./models/tvShowModel');
const bookRouter = require('./routes/appRouter')(TvShow);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api', bookRouter);


app.get('/', (req, res) => {
    res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});