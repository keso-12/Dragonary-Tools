import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';
import Link from '../../shared/Link';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'red',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link path="/">
            <Typography variant="h6" className={classes.title}>
              APP
            </Typography>
          </Link>
          <Link path="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default NavBar;
