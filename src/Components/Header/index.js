import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import userImg from '../../assets/images/leonidas.png';
import logoImg from '../../assets/images/kurt-logo.png';

import { Container, UserInfo, Logout } from './styles';

export default function Header() {
  return (
    <Container>
      <UserInfo>
        <img src={userImg} alt="userImg" />
        <strong>Leônidas I de Esparta</strong>
        <span>Administrator</span>
      </UserInfo>
      <div className="logo">
        <img src={logoImg} alt="logoImg" />
      </div>
      <Logout>
        <FaSignOutAlt />
        <span>Logout</span>
      </Logout>
    </Container>
  );
}
