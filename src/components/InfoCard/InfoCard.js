import React from 'react';
import Popup from 'reactjs-popup';
import InfoPopup from '../InfoPopup/InfoPopup';

const InfoCard = ({ image, title, description }) => {
  return (
    <div aria-haspopup aria-label="Espaço de informações de fósseis">
      <Popup
        trigger={
          <button>
            <img src={image} alt="Imagem ilustrativa do fóssil" />
          </button>
        }
        position="center/center"
        modal
        lockScroll
      >
        {close => {
          <InfoPopup close={close} />;
        }}
      </Popup>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default InfoCard;
