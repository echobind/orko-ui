import React from 'react';
import { Header } from '../../components/Header';
import PropTypes from 'prop-types';

export const DefaultLayout = ({ render }) => <div>{render({ Header })}</div>;

DefaultLayout.propTypes = {
  render: PropTypes.func
};
