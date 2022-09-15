import styled from 'styled-components';

export const HeaderContainer = styled.header`
  font-family: 'Montserrat', sans-serif;
  width: 100vw;
  height: 70vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 65vw;
    margin: 0 0 0 0;
  }
  p {
    padding: 0 50px 25px 50px;
    width: 70vw;
    font-size: larger;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.5px;
    overflow: hidden;
  }
`;
