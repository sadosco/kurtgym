import { all, call, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

function* signInRequest({ email, password }) {
  const response = yield call(api.get, 'session');

  const user = response.data.find(
    ({ email: userEmail, password: userPassword }) =>
      userEmail === email && userPassword === password
  );

  if (!user) return;

  console.tron.log(user.token);
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signInRequest)]);
