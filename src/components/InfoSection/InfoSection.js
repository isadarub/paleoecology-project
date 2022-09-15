import React from 'react';
import InfoCard from '../InfoCard/InfoCard.js';
import { SectionStyled } from './style.js';

const InfoSection = ({ fossils, age, description }) => {
  const cards = fossils.map((fossil, index) => {
    if (index === 0 || index === 2 || index === 4) {
      return (
        <InfoCard
          key={fossil.fossilTitle}
          image={fossil.image}
          title={fossil.fossilTitle}
          description={fossil.collectedIn}
          className="cards-right"
          details={fossil.details}
        />
      );
    } else {
      return (
        <InfoCard
          key={fossil.fossilTitle}
          image={fossil.image}
          title={fossil.fossilTitle}
          description={fossil.collectedIn}
          className="cards-left"
          details={fossil.details}
        />
      );
    }
  });

  return (
    <SectionStyled className={age}>
      <h3>{age}</h3>
      <p>{description}</p>
      <div className="cards-container" aria-hidden>
        {cards}
      </div>
    </SectionStyled>
  );
};

export default InfoSection;
