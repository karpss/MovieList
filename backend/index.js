const express = require('express');
const cors = require('cors');

const PORT = 8080;

const app = express();
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded());

// eslint-disable-next-line prefer-const
let movieList = [
  { movieName: 'Earth', releaseDate: '15-09-2003' },
  { movieName: 'Neptune', releaseDate: '10-11-2000' },
  { movieName: 'Mercury', releaseDate: '10-01-2010' },
  { movieName: 'Uranus', releaseDate: '28-02-1994' },
];

app.listen(PORT, () =>
  console.log(`The Movies API is running on: http://localhost:${PORT}.`)
);

// get Movie List
app.get('/movie', (request, response) => response.json(movieList));

// Add a movie
app.post('/movie', (request, response) => {
  const addMovie = {
    movieName: request.body.movieName,
    releaseDate: request.body.releaseDate,
  };
  movieList.push(addMovie);
  response.json({
    message: 'Movie added successfully!',
    movie: addMovie,
  });
});

// Get a particular movie
app.get('/movie/:id', (request, response) => {
  const oneMovie = movieList.filter(
    (movie) => movie.movieName === request.params.id
  )[0];

  if (!oneMovie) {
    return response.status(404).send('Movie not found');
  }

  return response.json(oneMovie);
});

// Update a particular movie
// app.put('/movie/:id', (request, response) => {
//   const updateMovie = movieList.find(
//     (movie) => movie.id === parseInt(request.params.id, 10)
//   );

//   if (!updateMovie) {
//     return response.status(404).send('Movie not found');
//   }

//   updateMovie.movieName = request.body.movieName;
//   updateMovie.releaseDate = request.body.releaseDate;

//   return response.json(updateMovie);
// });

// Delete a movie by id
// app.delete('/movie/:id', (request, response) => {
//   const deleteMovie = movieList.find(
//     (movie) => movie.id === parseInt(request.params.id, 10)
//   );

//   if (!deleteMovie) {
//     return response.status(404).send('Movie not found');
//   }

//   const index = movieList.indexOf(deleteMovie);
//   movieList.splice(index, 1);
//   return response.send('Movie Deleted');
// });

module.exports = app;
