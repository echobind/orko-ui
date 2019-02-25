import React from 'react';
import { Header } from '../../components/Header';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { Layout, globalStyles } from './styles';

export const DefaultLayout = ({ render }) => (
  <Layout>
    <Global styles={globalStyles} />
    {render({ Header })}
  </Layout>
);

DefaultLayout.propTypes = {
  render: PropTypes.func
};
