import React from 'react';
import {
  List,
  Divider,
  Typography,
  CircularProgress,
  ListItemText,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../../api/movies';
import { useSearchBarQuery } from '../../hooks/SearchBarContext';
import { Filter } from '../../components/DateFilter';
import StarButton from '../../components/StarButton';

function MovieListView(props: Props) {
  const { index } = props;
  const navigate = useNavigate();

  const { query } = useSearchBarQuery();

  const moviesQuery = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  });

  if (moviesQuery.status === 'loading') return <CircularProgress />;
  if (moviesQuery.status === 'error') {
    return (
      <Typography variant="h2" gutterBottom>
        {JSON.stringify(moviesQuery.error)}
      </Typography>
    );
  }

  const filteredMovieList = moviesQuery.data.filter((mov: Movies) =>
    mov.movieName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div data-testid="MovieListView">
      <Filter />

      <List>
        {filteredMovieList.map((movie: Movies) => (
          <ListItemText
            key={movie.movieName}
            onClick={() => {
              navigate(`/movie/${movie.movieName.split(' ').join('_')}`);
            }}
          >
            <StarButton index={index} />

            <Typography variant="h3" gutterBottom>
              {movie.movieName}
            </Typography>

            <Divider />
          </ListItemText>
        ))}
      </List>
    </div>
  );
}

export default MovieListView;
