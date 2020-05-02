import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/Default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const login = false;

  if (!login && isPrivate) {
    return <Redirect to="/" />;
  }

  if (login && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
