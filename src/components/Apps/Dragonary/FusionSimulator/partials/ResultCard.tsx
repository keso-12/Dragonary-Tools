import React, { Fragment } from 'react';
import {
  CardHeader, CardContent, Grid, Typography,
} from '@material-ui/core';
import SecurityIcon from '@material-ui/icons/Security';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { DragonProps } from '../index';

type EggProps = {
  dragonState: DragonProps
}

export default function ResultCard({ dragonState }: EggProps) {
  const { attack, defense, intelligence } = dragonState;

  return (
    <Fragment>
      <CardHeader title="Fused Dragon" />
      <CardContent>
        <Grid container>
          <Grid item xs={2}>
            <FlashOnIcon />
          </Grid>
          <Grid item xs={10}><Typography>{attack}</Typography></Grid>
          <Grid item xs={2}>
            <PermIdentityIcon />
          </Grid>
          <Grid item xs={10}><Typography>{intelligence}</Typography></Grid>
          <Grid item xs={2}>
            <SecurityIcon />
          </Grid>
          <Grid item xs={10}><Typography>{defense}</Typography></Grid>
        </Grid>
      </CardContent>
    </Fragment>
  );
}
