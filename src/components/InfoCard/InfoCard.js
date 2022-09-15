import React from 'react';
import { InfoCardContent, PopupStyled } from './styled';

const InfoCard = ({ image, title, description, className, details}) => {

  return (
    <InfoCardContent
      className={className}
      aria-label="Espaço de informações de fósseis"
    >
      <PopupStyled
        position="right center"
        modal
        lockScroll="true"
        closeOnDocumentClick
        trigger={
          <button>
            <img src={image} alt="Imagem ilustrativa do fóssil" />
          </button>
        }
      >
        
          {<>            
            <img src="" className='reconstituition' alt="Reconstituição do periodo com o fóssil em destaque" />

            <p>{details.longDescription}</p>
          </>}
      
      </PopupStyled>
      <div className="texts">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </InfoCardContent>
  );
};

export default InfoCard;
