import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Box, IconButton,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DragonaryLogo from 'assets/Dragonary/logo_dragonary.png';
import Link from '../../shared/Link';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: 'inherit',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  item: {
    margin: '0 0.4em',
  },
  logo: {
    width: '6%',
  },
}));

const NavBar = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Box className={classes.container}>
            <Box className={classes.logo}><Typography variant="h4">KS</Typography></Box>
            <Box className={classes.item}>
              <Link path="/">
                <Typography variant="h6" className={classes.title}>
                  Home
                </Typography>
              </Link>
            </Box>
            <Box className={classes.item}>
              <Link path="/dragonary">
                <img src={DragonaryLogo} alt="Dragonary" style={{ width: '140px' }} />
              </Link>
            </Box>
            <Box className={classes.item} style={{ marginLeft: 'auto' }}>
              <IconButton onClick={toggleTheme}>
                <Brightness4Icon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
