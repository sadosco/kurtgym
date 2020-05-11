import React from 'react';
import { useSelector } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';

import logoImg from '../../assets/images/kurt-logo.png';

import { Container, UserInfo, Logout } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);

  function handleLogout() {}

  return (
    <Container>
      <UserInfo>
        <img src={profile.avatar} alt={profile.name} />
        <strong>{profile.name}</strong>
        <span>{profile.type}</span>
      </UserInfo>
      <div className="logo">
        <img src={logoImg} alt="KurtGym" />
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
