import React from 'react';
import { DefaultLayout } from '../layouts/Default';

const Index = () => (
  <DefaultLayout
    render={({ Header }) => (
      <>
        <h1>About Page</h1>
        <Header />
      </>
    )}
  />
);

export default Index;
