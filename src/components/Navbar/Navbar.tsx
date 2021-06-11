import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
interface Props {
    leftContent: React.ReactNode | string;
    rightContent?: React.ReactNode | string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    left: {
      flexGrow: 1,
    },
  }),
);

const Navbar:React.FC<Props> = ({ leftContent, rightContent}) => {
  const classes = useStyles();

    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <div className={classes.left}>{leftContent}</div>
          {rightContent}
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;