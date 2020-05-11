import { all, call, put, takeLatest } from 'redux-saga/effects';
import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

function* signInRequest({ email, password }) {
  try {
    const response = yield call(api.get, 'session');

    const session = response.data.find(
      ({ email: userEmail, password: userPassword }) =>
        userEmail === email && userPassword === password
    );

    if (!session) return;

    yield put(signInSuccess(session.token, session.user));

    history.push('/home');
  } catch (error) {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signInRequest)]);
