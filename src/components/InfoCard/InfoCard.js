import React from 'react';
import { InfoCardContent, PopupStyled } from './styled';

const InfoCard = ({ image, title, description, className, details }) => {

  const mountTaxonomicDescription = details.taxonomicDescription.map(item => {
    return (
      <li key={item} ><p>{item}</p></li>
    )
  })

  return (
    <InfoCardContent
      className={className}
      aria-label="Espaço de informações de fósseis"
    >
      <PopupStyled
        position="right center"
        modal
        lockScroll="true"
        trigger={
          <button>
            <img src={image} alt="Imagem ilustrativa do fóssil" />
          </button>
        }
      >
        {
          <div className="popup-container">
            <img
              src={details.reconstruction}
              className="reconstituition"
              alt="Reconstituição do periodo com o fóssil em destaque"
            />
            <div className="popup-texts">
              <h4>Modo de fossilização:</h4>
              <p>{details.fossilizationMode}</p>
              <ul>
                <h4>Identificação taxonômica:</h4>
                {mountTaxonomicDescription}
              </ul>
              <h4>Saiba mais: </h4>
              <p>{details.longDescription}</p>
            </div>
          </div>
        }
      </PopupStyled>
      <div className="texts">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </InfoCardContent>
  );
};

export default InfoCard;
