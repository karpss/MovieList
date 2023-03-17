import React, { useState, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';

import { addMovie } from '../../api/movies';

export default function AddMovie() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [movieName, setMovieName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const createMovieMutation = useMutation({
    mutationFn: addMovie,
    onSuccess: (data) => {
      queryClient.setQueryData(['movies', data.movieName], data);
      queryClient.invalidateQueries(['movies'], { exact: true });
      navigate('/');
    },
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      createMovieMutation.mutate({
        movieName,
        releaseDate: new Date(releaseDate).toLocaleDateString(),
      });
    },
    [createMovieMutation, movieName, releaseDate]
  );

  return (
    <div data-testid="AddMovie">
      <Typography variant="h2" gutterBottom>
        Add Movie
      </Typography>

      {createMovieMutation.isError && JSON.stringify(createMovieMutation.error)}
      <form>
        <TextField
          sx={{
            '& > :not(style)': { m: 1, width: '55ch' },
          }}
          type="text"
          id="movieName"
          placeholder="Movie Name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <br />
        <TextField
          sx={{
            '& > :not(style)': { m: 1, width: '55ch' },
          }}
          type="date"
          id="releaseDate"
          placeholder="Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <br />

        <Button
          type="button"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={!movieName || !releaseDate}
        >
          {createMovieMutation.isLoading ? 'Loading...' : 'Create Movie'}
        </Button>
      </form>
    </div>
  );
}
