import React, { useState, useEffect } from 'react';
import { DefaultLayout } from '../layouts/Default';
import { Inventory } from '../services/inventory';
import { Personnel } from '../services/personnel';
import { Manufacturers } from '../services/manufacturers';

const Index = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    const inventory = await Inventory.fetch();
    const personnel = await Personnel.fetch();
    const manufacturers = await Manufacturers.fetch();

    setData({ inventory, personnel, manufacturers });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <DefaultLayout
      render={({ Header }) => (
        <>
          <h1>Home Page</h1>
          <Header />
          {isLoading && <strong>Loading...</strong>}
          {!isLoading &&
            data.inventory.records.map(r => (
              <div key={`product-${r.id}`}>
                <strong>{r.fields['Product Name'][0]}</strong>
              </div>
            ))}
        </>
      )}
    />
  );
};

export default Index;
