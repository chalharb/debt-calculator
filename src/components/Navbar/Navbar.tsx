import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface Props {
    children?: React.ReactNode;
    title: string;
}

// TODO: Create a prop that allow you to pass in a component on the right side of the nav
const Navbar:React.FC<Props> = ({ children, title }) => {
    return (
        <AppBar>
        <Toolbar>
          <Typography variant="h6">
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;