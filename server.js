// =======================================
//              DEPENDENCIES
// =======================================

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

// =======================================
//              PORT
// =======================================
const PORT = process.env.PORT || 3000;
const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ 'autismConnect';

// Connect to Mongo
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
db.once('open', ()=>{
  console.log('Connected to Mongo');
})

// =======================================
//             ERROR/SUCCESS MESSAGES
// =======================================
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// =======================================
//            CONTROLLERS
// =======================================

const blogsController = require('./controllers/blogs.js');
app.use('/blogs', blogsController);

// =======================================
//              STATIC
// =======================================
app.use(express.static('public'));

// =======================================
//            ROUTES
// =======================================

app.get('/', (req, res)=>{
  res.send('Hello world');
});

// =======================================
//            LISTENER
// =======================================
app.listen(PORT, () => {
  console.log('Autism Connect app listening on port: '+PORT)
});
