import React from 'react';
import { DefaultLayout } from '../layouts/Default';

// eslint-disable-next-line
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

const fetchInventory = async () => {
  const response = await fetch(
    'https://api.airtable.com/v0/appu5RedhRnKd7bwJ/Product Inventory',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`
      }
    }
  );

  const json = await response.json();

  console.log(json);
};

fetchInventory();

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
