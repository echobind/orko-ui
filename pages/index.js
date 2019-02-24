import React from 'react';
import { DefaultLayout } from '../layouts/Default';
import { Inventory } from '../services/inventory';
import { Personnel } from '../services/personnel';
import { Manufacturers } from '../services/manufacturers';

(async () => {
  const inventory = await Inventory.fetch();
  const personnel = await Personnel.fetch();
  const manufacturers = await Manufacturers.fetch();

  console.log({ inventory, personnel, manufacturers });
})();

const Index = () => (
  <DefaultLayout
    render={({ Header }) => (
      <>
        <h1>Home Page</h1>
        <Header />
      </>
    )}
  />
);

export default Index;
