const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        type: {
            type: String,
            trim: true,
            required: "Exercise Type: "
        },
        name: {
            type: String,
            trim: true,
            required: "Name of Exercise: "
        },
        duration: {
            type: Number,
            required: "Duration (Minutes): "
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        },
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
