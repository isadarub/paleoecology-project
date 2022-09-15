import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const InfoCardContent = styled.div`
  width: 100%;
  margin: 2rem 0 2rem 0;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    width: 30vw;
    transition: 0.6s;
  }

  img:hover {
    border: 10px solid rgba(255, 255, 255, 0.5);
  }
`;

export const PopupStyled = styled(Popup)`
  &-overlay {
    background-color: white;
    width: 85vw;
    height: 85vh;
    margin: auto auto;
    font-family: 'Montserrat', sans-serif;
    transition: 1s;
  }

  &-content .popup-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  &-content .reconstituition {
    width: 50%;
    height: 70%;
    object-fit: cover;
  }

  &-content .popup-texts {
    text-align: left;
    width: 500px;
  }

  &-content p {
    font-weight: 500;
    margin: 1rem 1rem 2rem 1rem;
  }

  &-content ul {
    margin-bottom: 2rem;
  }

  &-content li p {
    margin: 1rem 1rem 0 1rem;
  }
`;
