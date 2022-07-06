import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from 'react-router-dom';
import CustomLink from './CustomLink';

export default function CustomAppBar() {


  const location = useLocation()
  console.log(location.pathname);
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {location.pathname !== "/" &&
              <CustomLink isappbar to='' >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                    <ArrowBackIcon />
                </IconButton>
              </CustomLink>
           }
          <Typography noWrap variant="h6" component="div" sx={{ position:'absolute', left: '50%', transform: "translateX(-50%)" }}>
            Meu jogo da memória
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
