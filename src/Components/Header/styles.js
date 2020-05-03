import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  min-width: 1300px;
  background: #90251d;
  box-shadow: 3px 3px 15px rgba(255, 255, 255, 0.7);

  display: flex;
  align-items: center;

  .logo {
    width: calc(100% / 3);
    text-align: center;

    img {
      height: 80px;
    }
  }
`;

export const UserInfo = styled.div`
  width: calc(100% / 3);
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-left: 30px;
  }

  strong {
    font-size: 25px;
    padding: 0 15px;
    border-right: 1px solid #fff;
  }

  span {
    margin-left: 15px;
    font-size: 20px;
  }
`;

export const Logout = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: flex-end;
  transition: 0.2s;

  div {
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: rgba(0, 0, 0, 0.6);
    }

    svg {
      font-size: 30px;
      margin-right: 10px;
    }

    span {
      padding-right: 30px;
      font-size: 20px;
    }
  }

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 1100px) {
    justify-content: flex-start;
  }
`;
