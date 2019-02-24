import React from 'react';
import { DefaultLayout } from '../layouts/Default';

// eslint-disable-next-line
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

console.log('API KEY! ', AIRTABLE_API_KEY);

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
