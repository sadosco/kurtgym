import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  min-width: 1300px;
  background: #d6663c;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;

  .logo {
    width: 33.33%;
    text-align: center;

    img {
      height: 80px;
    }
  }
`;

export const UserInfo = styled.div`
  width: 33.33%;
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
  width: 33.33%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    font-size: 30px;
    margin-right: 10px;
  }

  span {
    padding-right: 30px;
    font-size: 20px;
  }
`;
