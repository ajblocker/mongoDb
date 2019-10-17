

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
// router.use('*', (req, res) => {
//     // console.log(req.url, req.method)
//     // console.log(req.body)
//     // console.log(req.originalUrl)
//     // console.log(req.baseUrl)
// })
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