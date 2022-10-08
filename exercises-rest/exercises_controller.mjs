import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

function destringify(exercise) {

    if (typeof exercise.reps !== 'number') {
        exercise.reps = Number(exercise.reps);
    }

    if (typeof exercise.weight !== 'number') {
        exercise.weight = Number(exercise.weight);
    }

    return exercise;
}

/**
 * Validates the format of a date string
 * @param {string} date 
 * @returns true if the date format is MM-DD-YY where MM, DD, and YY are 2 digit integers
 */
function isDateValid(date) {
    const format = /^\d\d-\d\d-\d\d$/;
    return format.test(date);
}

/**
 * Checks to see if the exercise to be created is in the valid format
 * @param {json} exercise 
 * @returns true if exercise if valid, false if not
 */
function validateExercise(exercise) {
    let isValid = true;
    
    const name = exercise.name;
    const reps = exercise.reps;
    const weight = exercise.weight;
    const unit = exercise.unit;
    const date = exercise.date;

    if (name === undefined || typeof name !== "string" || name.length < 1) {
        isValid = false;
    } else if (reps === undefined || isNaN(reps) || reps < 1) {
        isValid = false;
    } else if (weight === undefined || isNaN(reps) || weight < 1) {
        isValid = false;
    } else if ((unit === undefined || typeof unit !== "string") || (unit !== "kgs" && unit !== "lbs")) {
        isValid = false;
    } else if (date === undefined || typeof date !== "string") {
        isValid = false;
    } else if (date !== undefined && typeof date === "string") {
        const validDate = isDateValid(date);
        if (!validDate) {
            isValid = false
        }
    } 

    return isValid;
}

/**
 * Create a new exercise with the name, reps, weight, unit, and date provided in the body
 */
app.post('/exercises', (req, res) => {
    //console.log(req.body);

    destringify(req.body);

    //console.log(req.body);

    if (validateExercise(req.body)) {
        exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
            .then(exercise => {
                res.status(201).json(exercise);
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({Error: 'Request failed'});
            })
    } else {
        res.status(400).json({Error: 'Invalid request'})
    }
});

/**
 * Retrieve exercises based on query parameters
 */
app.get('/exercises', (req, res) => {
    let filter = {};

    if (req.query.name !== undefined) {
        filter = {year: req.query.year};
    }

    if (req.query.reps !== undefined) {
        filter = {reps: req.query.reps};
    }

    if (req.query.weight !== undefined) {
        filter = {weight: req.query.weight};
    }

    if (req.query.unit !== undefined) {
        filter = {unit: req.query.unit};
    }

    if (req.query.date !== undefined) {
        filter = {date: req.query.date};
    }

    exercises.findExercises(filter, '', 0) 
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.send({Error: 'Request Failed'});
        })
});

app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercise => {
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({Error: 'Not found'});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: 'Request failed'});
        })
});

app.put('/exercises/:_id', (req, res) => {
    //console.log(req.body);

    destringify(req.body);

    //console.log(req.body);

    if (validateExercise(req.body)) {
        exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
            .then(numUpdated => {
                if (numUpdated === 1) {
                    res.json({_id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date })
                } else {
                    res.status(404).json({Error: 'Not found'});
                }
            })
            .catch(error => {
                console.error(error);
                res.status(400).json({Error: 'Request failed'});
            })
    } else {
        res.status(400).json({Error: 'Invalid request'});
    }
})

app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deleteCount => {
            if (deleteCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({Error: 'Not found'})
            }
        })
        .catch(error => {
            console.error(error);
            res.send({Error: 'Request failed'});
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});