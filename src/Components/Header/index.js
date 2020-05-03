import React, { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import logoImg from '../../assets/images/kurt-logo.png';

import api from '../../services/api';

import { Container, UserInfo, Logout } from './styles';

export default function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUserDetails() {
      const email = 'leonidas@kurtgym.com';

      const response = await api.get(`user?email=${email}`);

      console.tron.log(response.data[0]);
      setUser(response.data[0]);
    }

    getUserDetails();
  }, []);

  function handleLogout() {}

  return (
    <Container>
      <UserInfo>
        <img src={user.avatar} alt="userImg" />
        <strong>{user.name}</strong>
        <span>{user.type}</span>
      </UserInfo>
      <div className="logo">
        <img src={logoImg} alt="logoImg" />
      </div>
      <Logout onClick={handleLogout}>
        <div>
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </Logout>
    </Container>
  );
}
