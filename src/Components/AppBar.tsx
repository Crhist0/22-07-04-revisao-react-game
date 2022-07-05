import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';

export default function CustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CustomLink isAppBar to='' >
              <ArrowBackIcon />
            </CustomLink>
          </IconButton>
          <Typography textAlign='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meu jogo da memória
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
