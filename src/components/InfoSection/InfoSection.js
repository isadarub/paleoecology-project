import React from 'react';
import InfoCard from '../InfoCard/InfoCard.js';
import { SectionStyled } from './style.js';

const InfoSection = ({fossils, period, description}) => {
  
  const cards = fossils.map(fossil => {
    return <InfoCard key={fossil.fossilTitle} image={fossil.image} />;
  });
  return (
    <SectionStyled>
      <h3>{period}</h3>
      <p>{description}</p>
      <div aria-hidden>{cards}</div>
    </SectionStyled>
  );
};

export default InfoSection;
