import React from 'react';
import InfoCard from '../InfoCard/InfoCard.js';
import { SectionStyled } from './style.js';

const InfoSection = ({ fossils, age, description }) => {
  const cards = fossils.map(fossil => {
    return (
      <InfoCard
        key={fossil.fossilTitle}
        image={fossil.image}
        title={fossil.fossilTitle}
        description={fossil.shortDescription}
      />
    );
  });
  return (
    <SectionStyled className={age}>
      <h3>{age}</h3>
      <p>{description}</p>
      <div aria-hidden>{cards}</div>
    </SectionStyled>
  );
};

export default InfoSection;
