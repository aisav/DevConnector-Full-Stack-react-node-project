const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var users = require('./routes/api/users');
var profile = require('./routes/api/profile');
var posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('mongoDB connected'))
    .catch((err) => console.log(err))

app.get('/', function(req, res){ res.send('hello world '); });

app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.port || 5000;

app.listen(port, function() { console.log('Server runing on port: ' + port)});