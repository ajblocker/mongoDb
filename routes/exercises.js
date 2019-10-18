
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
//finds exercise log from Exercise Schema model, sends json data back and catches any error
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
//creates exercise log from Exercise Schema model, sends json data back and catches any error
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
//find one specific exercise log from Exercise Schema model by id and 
//await pauses execution of async function
router.get("/:id", async (req, res) => {
    await Exercise.findOne(
        {
            _id: req.params.id
        }
    );
});

// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
//deletes one specific exercise log from Exercise Schema model by id and 
//await pauses execution of async function
router.delete("/:id", async (req, res) => {
    await Exercise.deleteOne(
        {
            _id: req.params.id
        }
    )
});
// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
//updates one specific exercise log from Exercise Schema model by id and 
//await pauses execution of async function
router.post("/update/:id", async (req, res) => {
   await Exercise.updateOne(
        {
            _id: req.params.id
        },
        {
            $set: {
                username: req.body.username,
                description: req.body.description,
                duration: req.body.duration,
                date: req.body.date
            } 
        }
    )
});

module.exports = router;

