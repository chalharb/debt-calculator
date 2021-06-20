import React from 'react';

// MUI Components
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Navbar from './features/Navbar/Navbar';
import Theme from './features/Theme/Theme';

function App() {
  return (
    <Theme>
      <Navbar />
      <Container
        maxWidth="xl"
      >
        <Box
          mt={4}
        >
          <Grid container
            spacing={3}
          >
            <Grid item
              xs={12}
              lg={6}
            >
              <h2>Debt Table Feature</h2>
            </Grid>
            <Grid item
              xs={12}
              lg={6}
            >
              <h2>Debt Burndown Feature</h2>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Theme>
  );
}

export default App;