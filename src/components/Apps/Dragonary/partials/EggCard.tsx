import React, { Fragment } from 'react';
import {
  CardHeader, CardContent, Grid, Typography,
} from '@material-ui/core';
import SecurityIcon from '@material-ui/icons/Security';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AllOutIcon from '@material-ui/icons/AllOut';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssistantIcon from '@material-ui/icons/Assistant';
import EggPng from 'assets/Dragonary/egg.png';
import { DragonProps } from './helpers';

type EggProps = {
  dragonState: DragonProps
}

export default function EggCard({ dragonState }: EggProps) {
  const {
    attack, defense, intelligence, element, cost, rarity,
  } = dragonState;

  return (
    <Fragment>
      <CardHeader title="Dragon Egg" />
      <img alt="" src={EggPng} style={{ width: '400px' }} />
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
          <Grid item xs={2}>
            <AllOutIcon />
          </Grid>
          <Grid item xs={10}><Typography>{element}</Typography></Grid>
          <Grid item xs={2}>
            <AttachMoneyIcon />
          </Grid>
          <Grid item xs={10}><Typography>{cost}</Typography></Grid>
          <Grid item xs={2}>
            <AssistantIcon />
          </Grid>
          <Grid item xs={10}><Typography>{rarity}</Typography></Grid>
        </Grid>
      </CardContent>
    </Fragment>
  );
}
