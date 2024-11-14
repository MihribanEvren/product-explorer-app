import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Box className="flex-grow">
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Link to="/" className="flex-grow no-underline">
            <Typography
              variant="h6"
              noWrap
              component="div"
              className="flex-grow"
            >
              CLOUD ☁️
            </Typography>
          </Link>
          <SearchInput placeholder="Search" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
