import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import * as Auth from '../../store/modules/auth/actions';
import logo from '../../assets/images/kurtgym-logo2.png';

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(Auth.signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="KurtGym" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">
          {loading ? 'Carregando...' : 'Acessar conta'}
        </button>
        <Link to="/signup">Criar conta</Link>
      </Form>
    </>
  );
}
