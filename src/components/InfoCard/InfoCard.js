import React from 'react';
import Popup from 'reactjs-popup';
import InfoPopup from '../InfoPopup/InfoPopup';
import { InfoCardContent } from './styled';

const InfoCard = ({ image, title, description, className }) => {
  return (
    <InfoCardContent
      className={className}
      aria-haspopup
      aria-label="Espaço de informações de fósseis"
    >
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
      <div className="texts">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </InfoCardContent>
  );
};

export default InfoCard;
