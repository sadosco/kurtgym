import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RoutesWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const logged = false;

  if (!logged && isPrivate) {
    return <Redirect to="/" />;
  }

  if (logged && !isPrivate) {
    return <Redirect to="/home" />;
  }

  const Layout = logged ? DefaultLayout : AuthLayout;

  return (
    <Route
      rest={rest}
      render={(props) => (
        <Layout>
          <Component props={props} />
        </Layout>
      )}
    />
  );
}

RoutesWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RoutesWrapper.defaultProps = {
  isPrivate: false,
};
