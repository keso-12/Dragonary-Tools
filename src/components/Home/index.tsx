import React, { useContext, useEffect } from 'react';
import { StoreContext } from 'globalStore';
import MainBanner from 'assets/main-banner.png';

function App() {
  const { setBanner } = useContext(StoreContext);

  useEffect(() => {
    setBanner(MainBanner);
  }, []);

  return (
    <div />
  );
}

export default App;
