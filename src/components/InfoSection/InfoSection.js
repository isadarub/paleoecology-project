import React from 'react';
import InfoCard from '../InfoCard/InfoCard.js';
import { SectionStyled } from './style.js';

const InfoSection = props => {
  console.log(props.images);
  console.log(props.className);
  const cards = props.images.map(image => {
    return <InfoCard className={props.className} key={image} image={image} />;
  });
  return (
    <SectionStyled className={props.className}>
      <h3>{props.name}</h3>
      <p>Breve descrição do período</p>
      <div aria-hidden>{cards}</div>
    </SectionStyled>
  );
};

export default InfoSection;
