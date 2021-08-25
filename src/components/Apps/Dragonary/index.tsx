import React, { useContext, useEffect, useState } from 'react';
import {
  Container, Card, Button, Grid, Paper, MenuItem, TextField,
} from '@material-ui/core';
import { StoreContext } from 'globalStore';
import Banner from 'assets/Dragonary/dragonary-banner.png';
import DragonCard from './partials/DragonCard';
import EggCard from './partials/EggCard';
import {
  getOffspringStats, DragonProps, initialStats, elementList,
} from './partials/helpers';

export default function SignUp() {
  const [offspring, setOffspring] = useState<DragonProps>(initialStats);
  const [dragon1, setDragonOne] = useState<DragonProps>(initialStats);
  const [dragon2, setDragonTwo] = useState<DragonProps>(initialStats);
  const [ember, setEmber] = useState('fire');
  const { setBanner } = useContext(StoreContext);

  useEffect(() => {
    setBanner(Banner);
  }, []);

  const Breed = () => {
    const stats = getOffspringStats(dragon1, dragon2, ember);
    setOffspring(stats);
  };

  return (
    <Container component="main">
      <Paper>
        <Grid container>
          <Grid item md={4}>
            <DragonCard title="Dragon One" dragonState={dragon1} setDragonState={setDragonOne} />
          </Grid>
          <Grid item md={4}>
            <Card style={{ width: '400px', padding: '1em' }}>
              <EggCard dragonState={offspring} />
              <TextField id="element" name="element" label="Ember Element" value={ember} onChange={(e) => setEmber(e.target.value)} variant="filled" select fullWidth>
                {elementList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Button variant="outlined" color="primary" onClick={Breed} style={{ marginTop: '0.2em' }} fullWidth>
                Breed
              </Button>
            </Card>
          </Grid>
          <Grid item md={4}>
            <DragonCard title="Dragon Two" dragonState={dragon2} setDragonState={setDragonTwo} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
