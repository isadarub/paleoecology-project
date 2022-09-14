import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: rgb(255, 255, 255, 0.7);
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  padding: 0 25% 0 25%;

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-between;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    margin-left: 1%;
  }
  li {
    list-style: none;
    padding: 5px;
  }
  h5 {
    text-align: center;
    padding: 1%;
  }
`;
