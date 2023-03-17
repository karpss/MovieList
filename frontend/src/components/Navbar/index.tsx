import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchBarQuery } from '../../hooks/SearchBarContext';

function Navbar() {
  const { setShow } = useSearchBarQuery();

  return (
    <div data-testid="Navbar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie List
          </Typography>
        </Toolbar>

        <IconButton
          sx={{ position: 'absolute', right: 0 }}
          onClick={() => setShow((show) => !show)}
          size="large"
          aria-label="search"
          color="inherit"
        >
          <SearchIcon />
        </IconButton>
      </AppBar>
    </div>
  );
}
export default Navbar;
