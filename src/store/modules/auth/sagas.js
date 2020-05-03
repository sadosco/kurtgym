import { all, call, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

function* signInRequest({ email, password }) {
  console.tron.log('testeee');

  const response = yield call(api.get, `session`);

  const { token } = response.data.find(
    ({ email: userEmail, password: userPassword }) =>
      userEmail === email && userPassword === password
  );

  if (!token) return;

  console.tron.log(token);
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signInRequest)]);
