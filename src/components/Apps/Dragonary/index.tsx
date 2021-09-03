import React, { useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { StoreContext } from 'globalStore';
import Banner from 'assets/Dragonary/dragonary-banner.png';
import TabControl from 'components/shared/TabControl';
import BreedingSimulator from './BreedingSimulator';
import FusionSimulator from './FusionSimulator';

const Dragonary = () => {
  const { setBanner } = useContext(StoreContext);

  useEffect(() => {
    setBanner(Banner);
  }, []);

  return (
    <Container component="main">
      <TabControl
        tabContent={[
          {
            header: 'Breeding Simulator',
            content: <BreedingSimulator />,
          },
          {
            header: 'Fusion Simulator',
            content: <FusionSimulator />,
          },
        ]}
      />
    </Container>
  );
};

export default Dragonary;
