const express = require('express');
const app = express();
const PORT = 3000;
const bookmarksController = require('./controllers/bookmarks.js');
const mongoose = require('mongoose');

// middleware
app.use(express.json());

// BRING IN MONGOSE
// error/disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb+srv://lala123:lala123@cluster0.6klqm.mongodb.net/bookmarks?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})

app.use('/bookmarks', bookmarksController)

app.listen(PORT, () => {
    console.log(`Yay! port ${PORT} is running`)
});