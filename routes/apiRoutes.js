const router = require("express").Router();
const path = require("path");
var db = require("../models");
const Workout = require("../models/Workout");

// - Create all the routes to listen to the requests from the front end.
// - You will need at least Four (4) api routes:

//Get all workouts
router.get("/api/workouts", function (req, res) {
    console.log("get route");
    Workout.find({})
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});

//         - You will also need to figure out how to calculate the total duration from all exercises inside the exercises Array.


//     - GET ( "/api/workouts/range" ) - Get the first 7 Workouts from the Workout table to be used in the "stats" page.
router.get("/api/workouts/range", function (req, res) {
    Workout.find({ } )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// //     - POST ( "/api/workouts" ) - Create a new Workout
router.post("/api/workouts", function (req, res) {
    Workout.create(req.body)
        .then(dbWorkout => {
    res.json(dbWorkout);
})
        .catch(err => {
            res.json(err);
        });
console.log(req.body);
});


// //     - PUT ( "/api/workouts/:id" ) - Update a Workout
router.put("/api/workouts/:id", function (req, res) {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;