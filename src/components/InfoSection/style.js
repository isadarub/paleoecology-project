import styled from 'styled-components';

export const SectionStyled = styled.section`
  border: 1px solid black;
  margin: 5px;
  overflow-y: hidden;
  width: fit-content;

  h3 {
    font-size: x-large;
    color: white;
    padding: 5px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    padding: 0 1% 0 1%;
    margin-bottom: 1rem;
    color: white;
    font-weight: 400;
  }

  .cards-container {
    width: 100%;
    padding: 2rem;
  }

  .cards-right {
    display: flex;
    justify-content: space-between;
    text-align: right;
  }

  .cards-right .texts {
    text-align: right;
  }

  .cards-left {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    text-align: left;
  }

  .cards-left .texts {
    text-align: left;
  }

  .texts {
    width: 300px;
  }
`;
