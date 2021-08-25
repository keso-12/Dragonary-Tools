import React, { ReactNode, createContext, useState } from 'react';
import MainBanner from 'assets/main-banner.png';

export const StoreContext = createContext(null);

const Provider = ({ children }:{children: ReactNode}) => {
  // const [banner, setBanner] = useState<profileValuesProps>({});
  const [banner, setBanner] = useState(MainBanner);

  const store = {
    banner, setBanner,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export default Provider;
