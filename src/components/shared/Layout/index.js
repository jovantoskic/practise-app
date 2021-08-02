import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="content">{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
