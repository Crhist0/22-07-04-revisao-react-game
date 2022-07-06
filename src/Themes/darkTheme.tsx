import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary:{
        main: '#8ba85f'
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor:'#8ba85f'
          }
        }
      },
    }
  });

  export default darkTheme