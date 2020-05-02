import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../Components/Header';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
