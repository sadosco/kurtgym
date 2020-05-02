import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import DefaultLayout from '../pages/_layouts/Default';

export default function RoutesWrapper({
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
      rest={rest}
      render={(props) => (
        <DefaultLayout>
          <Component props={props} />
        </DefaultLayout>
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
