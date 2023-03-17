import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { getMovieDetails } from '../../api/movies';

type MovieDetailsParams = {
  movieName: string;
};

function MovieDetails() {
  const { movieName } = useParams<
    keyof MovieDetailsParams
  >() as MovieDetailsParams;
  const {
    status: movieStatus,
    error: movieError,
    data: movie,
  } = useQuery({
    queryKey: ['movies', movieName],
    queryFn: () => getMovieDetails(movieName),
  });

  if (movieStatus === 'loading') return <h1>Loading...</h1>;

  if (movieStatus === 'error') {
    return <h1>{JSON.stringify(movieError)}</h1>;
  }

  return (
    <div data-testid="MovieDetails">
      <Typography variant="h2">
        <Link to="/">All Movies</Link>
      </Typography>
      <Typography variant="h3" gutterBottom>
        {movie.movieName}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        {movie.releaseDate}
      </Typography>
    </div>
  );
}
export default MovieDetails;
