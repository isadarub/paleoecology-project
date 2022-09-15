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
    &-overlay{
      background-color: white;
      width: 85vw;
      height: 85vh;
      margin: auto auto;
    }

    &-content .reconstituition {
      
    }
`;