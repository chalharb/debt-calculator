import React from 'react';
import './App.css';
import { ThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import theme from "../../assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Debt Calculator</h1>
        <Button variant="contained" color="primary" onClick={() => { alert('clicked') }}>
          Primary
        </Button>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </ThemeProvider>
  );
}

export default App;
