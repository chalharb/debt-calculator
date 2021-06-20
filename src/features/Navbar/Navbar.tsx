import React from 'react';

// MUI Components
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

// Custom Components
import { StyledAppBar, StyledContentLeft } from './styled';
import { NavbarContentLeft, NavbarContentRight } from './content';

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <StyledContentLeft>
            <NavbarContentLeft/>
          </StyledContentLeft>
            <NavbarContentRight/>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;