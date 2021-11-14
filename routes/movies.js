const express = require('express');
const router = express.Router();
const Movie = require ("../models/Movie.model")

// require the Drone model here

router.route('/movies')
.get( async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    let findMovies = await Movie.find()
    res.render("movies", {findMovies})
  }
  catch (err) {
  console.log(err)
  }
});

router.route('/movies/:id')
.get( async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const idMovie = req.params.id; 
    let movie = await Movie.findById(idMovie)
    res.render("see-more", movie)
  }
  catch (err) {
  console.log(err)
  }
});

module.exports = router;