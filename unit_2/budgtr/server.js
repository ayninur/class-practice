////////////////////////////
// &++ DEPENDENCIES 
////////////////////////////

// brings in express library
const express = require('express');
// creates application object
const app = express();
// Defaults to 3000 unless one is defined elsewhere
const PORT = process.env.port || 3000;
// pulls in budget
const budget = require('/Users/anur/seir-flex-zen-work/homework/unit_2/budgtr/controllers/budget.js');

////////////////////////////
// +& MIDDLEWARE
////////////////////////////

// Sets public folder to be served statically (for images/CSS)
app.use(express.static("public"));
// Tells express that our View Engine will use .jsx files
app.set("view engine", "jsx");
// Set our view engine
app.engine('jsx', require("express-react-views").createEngine());

app.use(express.urlencoded({extended: true}));

////////////////////////////
//  ++ROUTES AND ROUTERS
////////////////////////////

// Index
app.get('/', (req, res) => {
    res.render("./budget/index.jsx");
})
// New
app.get('/new', (req, res) => {
    res.render('new.jsx');
})
// Show
app.get('/show', (req, res) => {
    res.render('show.jsx')
})
app.use("/budget", budget)

////////////////////////////
// ++ LISTENER 
////////////////////////////

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})