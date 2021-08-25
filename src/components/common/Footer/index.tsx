import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Paper, Grid, Typography, IconButton,
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    marginTop: '2em',
    padding: '1em 2em',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'red',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    enqueueSnackbar('This is a success message!', { variant: 'success' });
  };

  const bsc = '0x0586566A17125051792b66c9d3f1f8917db2DE87';
  const eth = '0x7CED965f78451Ba8e33520DC2f9e322EF537F5CB';
  const paypal = 'https://paypal.me/maxawkwardness?locale.x=en_US';

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography>Like my work? Buy me a coffee.</Typography>
          <Typography>
            BSC Address:
            {' '}
            {bsc}
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => copyToClipboard(bsc)}>
              <FileCopyIcon />
            </IconButton>
          </Typography>
          <Typography>
            ETH Address:
            {' '}
            {eth}
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => copyToClipboard(eth)}>
              <FileCopyIcon />
            </IconButton>
          </Typography>
          <Typography>
            <a href={paypal} style={{ textDecoration: 'none', color: 'inherit' }}>
              PAYPAL.ME
              <TouchAppIcon />
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
