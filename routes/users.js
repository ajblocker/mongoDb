

//////////////////////////////////////////
///   api endpoints for managing users //
////////////////////////////////////////

const router = require('express').Router();
let User = require('../models/user.model');

// Your Challenge: Make rwo routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all users on record
// GET: /
// ========================================
//block of statements to try and what to do if thrown, finds user by id
router.get("/", (req, res) => {
    console.log(req.url, "hello world")
    try {
        User.find({})
        .then(result => {
            console.log(result)
            res.json(result)
        })
    }
    catch(err) {
        console.log(err)
        res.json(err);
    }
}),


// 2. add a new user
// POST /
//creates new user and catches any error
// ========================================
router.post("/add", (req, res) => {
    console.log(req.body)
    try {
        User.create(req.body)
        .then(dbUser => {
            res.json(dbUser);
        })
    }
        catch(err) {
            res.json(err);
        }
});

module.exports = router;