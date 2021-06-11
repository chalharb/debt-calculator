import React from 'react';
import Theme from './components/Theme/Theme';
import Navbar from './components/Navbar/Navbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavLeftContent = (
  <Typography variant="h6">
    Debt Calculator
  </Typography>
);

const NavRightContent = (
  <Button color="inherit">Login</Button>
);

function App() {
  return (
    <Theme>
      <Navbar leftContent={NavLeftContent} rightContent={NavRightContent}></Navbar>
    </Theme>
  );
}

export default App;