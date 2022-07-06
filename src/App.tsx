import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import CustomAppBar from './Components/AppBar';
import Router from "./Router";
import l from './Themes/lightTheme';
import d from './Themes/darkTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={l}>
      <CssBaseline/>
        <Router>
          <CustomAppBar/>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
