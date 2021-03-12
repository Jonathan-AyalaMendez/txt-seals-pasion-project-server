require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Models
const Journal = require('./Models/event');

const port = process.env.PORT || 8888;
const mongoUri = process.env.URI;
const server = express();

// Middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

mongoose.set('useNewUrlParser', true);

// Connecting to mongodb
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to Mongo.'));
db.once('open', () => {
    console.log('Connection to Mongo Established!');
})

server.get('/', (req, res) => {
   res.status(200).send('server ok')
})


server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
})