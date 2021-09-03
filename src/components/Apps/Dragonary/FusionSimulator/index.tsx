import React, { useState } from 'react';
import {
  Paper, Grid, Button,
} from '@material-ui/core';
import DragonCard from './partials/DragonCard';
import ResultCard from './partials/ResultCard';

export type DragonProps = {
  attack: number,
  intelligence: number,
  defense: number,
}

export const initialStats = {
  attack: 30,
  intelligence: 30,
  defense: 30,
};

export default function FusionSimulator() {
  const [mainDragon, setMainDragon] = useState<DragonProps>(initialStats);
  const [resultDragon, setResultDragon] = useState<DragonProps>(initialStats);
  const [dragonOne, setDragonOne] = useState<DragonProps>(initialStats);
  const [dragonTwo, setDragonTwo] = useState<DragonProps>(initialStats);
  const [dragonThree, setDragonThree] = useState<DragonProps>(initialStats);
  const [dragonFour, setDragonFour] = useState<DragonProps>(initialStats);

  const getPortion = (n:number) => n * 0.1;

  const Fuse = () => {
    let atk = mainDragon.attack * 1.2;
    let def = mainDragon.defense * 1.2;
    let int = mainDragon.intelligence * 1.2;
    atk = atk + getPortion(dragonOne.attack) + getPortion(dragonTwo.attack)
    + getPortion(dragonThree.attack) + getPortion(dragonFour.attack);
    def = def + getPortion(dragonOne.defense) + getPortion(dragonTwo.defense)
     + getPortion(dragonThree.defense) + getPortion(dragonFour.defense);
    int = int + getPortion(dragonOne.intelligence) + getPortion(dragonTwo.intelligence)
    + getPortion(dragonThree.intelligence) + getPortion(dragonFour.intelligence);
    setResultDragon({
      attack: Math.trunc(atk),
      intelligence: Math.trunc(int),
      defense: Math.trunc(def),
    });
  };

  return (
    <Paper style={{ padding: '2em' }}>
      <Grid container>
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', margin: '2em 0' }}>
          <DragonCard title="Main Dragon" dragonState={mainDragon} setDragonState={setMainDragon} />
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', margin: '2em 0' }}>
          <Grid container>
            <Grid item xs={12}><ResultCard dragonState={resultDragon} /></Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={Fuse} style={{ marginTop: '0.5em' }} fullWidth>
                Fuse
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <DragonCard title="Dragon One" dragonState={dragonOne} setDragonState={setDragonOne} />
        </Grid>
        <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <DragonCard title="Dragon Two" dragonState={dragonTwo} setDragonState={setDragonTwo} />
        </Grid>
        <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <DragonCard title="Dragon Three" dragonState={dragonThree} setDragonState={setDragonThree} />
        </Grid>
        <Grid item xs={3} style={{ display: 'flex', justifyContent: 'center' }}>
          <DragonCard title="Dragon Four" dragonState={dragonFour} setDragonState={setDragonFour} />
        </Grid>
      </Grid>
    </Paper>
  );
}
