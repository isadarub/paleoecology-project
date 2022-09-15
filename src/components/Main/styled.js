import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  width: 75vw;
  font-family: 'Montserrat', sans-serif;
  overflow-y: hidden;

  .Paleozóico {
    height: fit-content;
    background: #5f0f40;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Mesozóico {
    height: fit-content;
    background: #fb8b24;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Cenozóico {
    height: fit-content;
    background: #e36414;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
