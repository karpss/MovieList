import { createTheme, ThemeProvider, Box, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MovieDetails from './Pages/MovieDetails';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieListView from './Pages/MovieListView';
import AddMovie from './Pages/AddMovie';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0532FF',
    },
  },
});

function App(props: Props) {
  const { index } = props;
  const navigate = useNavigate();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <Navbar />

          <SearchBar />
          <Fab
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
            }}
            color="primary"
            aria-label="Add"
            onClick={() => navigate('/movie/addMovie')}
          >
            <Add />
          </Fab>

          <Routes>
            <Route path="/" element={<MovieListView index={index} />} />
            <Route path="/movie/:movieName" element={<MovieDetails />} />
            <Route path="/movie/addMovie" element={<AddMovie />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
