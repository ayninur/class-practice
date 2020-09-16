// ++& HERE WE WILL HOUSE OUR ROUTES FOR THE BUDGETs DATA

const { Router } = require("express");
const router = Router();
const budget = require('../models/budget.js')

// NEW
router.get("/", (req, res) => {
    res.render("budget/index.jsx", { budget });
})
// CREATE
router.post('/', (req, res) => {
    budget.push(req.body.budget)
    res.redirect('/budget')
})
// SHOW
router.get("/:index", (req, res) => {
    res.render("budget/show.jsx", {
       budget: budget[req.params.index],
       index: req.params.index
    });
});

module.exports = router;


