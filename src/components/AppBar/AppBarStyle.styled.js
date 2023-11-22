import styled from 'styled-components';

export const AppBarStyle = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  border: 1px solid black;
  border-top: none;

  ul {
    display: flex;
    column-gap: 20px;
    align-items: center;
  }

  .user-menu-list {
    align-items: end;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-link {
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    column-gap: 4px;
    transition: 250ms linear;
  }

  .auth-list {
    display: flex;
    justify-content: center;
    align-items: center;
    /* column-gap: 10px; */
  }

  .auth-link {
    transition: 250ms linear;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    column-gap: 4px;
    color: black;
  }

  .nav-link:hover,
  .nav-link:focus,
  .auth-link:hover,
  .auth-link:focus {
    color: orange;
  }

  .active {
    color: orange;
  }

  .nav-link {
    font-size: 25px;
  }

  @media screen and (max-width: 460px) {
    .nav-list {
      column-gap: 10px;
    }

    .nav-link {
      font-size: 15px;
    }

    .user-email {
      font-size: 10px;
    }
  }
`;