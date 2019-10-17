const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const app = express();

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
app.get("/", (req, res) => {
    User.find({}, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    });
}),


// 2. add a new user
// POST /
// ========================================
app.post("/add", (req, res) => {
    User.create(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $set: {
                username: req.body.username,
                timestamp: Date.now()
            }
        }
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        })
    )
});

module.exports = router;