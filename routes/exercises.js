const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3000;
/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////
const databaseUrl = "exercise";
const collections = ["username", "description", "duration", "date"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
    console.log("Database Error:", error);
});

const router = require('express').Router();
let Exercise = require('../models/exercise.model.js');


// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all exercise logs on record
// GET: /
// ========================================
app.get("/", (req, res) => {
    Exercise.create(req)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        });
    });

// 2. add a new exercise log
// POST: /add
// ========================================
app.post("/add", (req, res) => {
    Exercise.update(req)
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        });
    });
// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================
app.get("/:id", (req, res) => {
    Exercise.findOne(
        {
            _id: mongojs.ObjectId(req.params.id)
        }
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        })
    )
});

// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
app.delete("/:id", (req, res) => {
    Exercise.remove(
        {
            _id: mongojs.ObjectID(req.params.id)
        }
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        })
    )
});
// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
app.post("/update/:id", (req, res) => {
    Exercise.update(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $set: {
                username: req.body.username,
                description: req.body.description,
                duration: req.body.duration,
                date: Date.now()
            }
        }
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        })
    )
});

module.exports = router;

// app.listen(3000, () => {
//     console.log("App running on port 3000!");
//   });