
/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require('express').Router();
let Exercise = require('../models/exercise.model.js');


// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all exercise logs on record
// GET: /
// ========================================
router.get("/", (req, res) => {
    Exercise.find({})
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
router.post("/add", (req, res) => {
    Exercise.create(req.body)
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
router.get("/:id", (req, res) => {
    Exercise.findOne(
        {
            "_id": req.params.id
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
router.delete("/:id", (req, res) => {
    Exercise.deleteOne(
        {
            "_id": req.params.id
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
router.post("/update/:id", (req, res) => {
    Exercise.updateOne(
        {
            "_id": req.params.id
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

