const db = require("../models");
const router = require("express").Router();


//get workouts
router.get("/api/workouts", (req, res) => {

  db.Workout.find({}).then(dbWorkout => {
      // console.log("ALL WORKOUTS");
      // console.log(dbWorkout);
      dbWorkout.forEach(workout => {
          var total = 0;
          workout.exercises.forEach(e => {
              total += e.duration;
          });
          workout.totalDuration = total;

      });

      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });
});

// add exercise
router.put("/api/workouts/:id", (req, res) => {

  db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
          $inc: { totalDuration: req.body.duration },
          $push: { exercises: req.body }
      },
      { new: true }).then(dbWorkout => {
          res.json(dbWorkout);
      }).catch(err => {
          res.json(err);
      });

});

//create workout
router.post("/api/workouts", ({ body }, res) => {
  // console.log("WORKOUT TO BE ADDED");
  // console.log(body);

  db.Workout.create(body).then((dbWorkout => {
      res.json(dbWorkout);
  })).catch(err => {
      res.json(err);
  });
});

// get workouts in range
router.get("/api/workouts/range", (req, res) => {

  db.Workout.find({}).then(dbWorkout => {
      console.log("ALL WORKOUTS");
      console.log(dbWorkout);

      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });

});


module.exports = router;
// module.exports = function (app) {
//   // App.get to pull up info for the workouts page
//   app.get("/api/workouts", (req, res) => {
//     db.Workout.find({})
//       .then((dbWorkout) => {
//         res.json(dbWorkout);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   });
//   // App.get to pull up info for the range page
//   app.get("/api/workouts/range", ({}, res) => {
//     db.Workout.find({})
//       .then((dbWorkout) => {
//         res.json(dbWorkout);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   });
//   // App.post to submit new completed workouts
//   app.post("/api/workouts/", (req, res) => {
//     db.Workout.create(req.body)
//       .then((dbWorkout) => {
//         res.json(dbWorkout);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   });
//   // App.put to update workouts by MongoDB _id value and update the exercsise body
//   app.put("/api/workouts/:id", (req, res) => {
//     db.Workout.findByIdAndUpdate(
//       { _id: req.params.id },
//       { exercises: req.body }
//     )
//       .then((dbWorkout) => {
//         res.json(dbWorkout);
//       })
//       .catch((err) => {
//         res.status(400).json(err);
//       });
//   });
// };
