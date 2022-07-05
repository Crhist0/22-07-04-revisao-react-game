import CssBaseline from '@mui/material/CssBaseline';
import CustomAppBar from './Components/AppBar';
import Router from "./Router";

function App() {
  return (
    <>
      <CssBaseline/>
      
      <Router>
        <CustomAppBar/>
      </Router>
    </>
  );
}

export default App;
