import React from 'react';
import InfoSection from '../InfoSection/InfoSection.js';
import trilobite from '../../assets/img/trilobite_eggs.jpg';
import title from '../../assets/img/title.png';

const Main = props => {
  const imagesPaleozoic = [trilobite, title];
  const imagesMesozoic = [trilobite];
  const imagesCenozoic = [title];
  return (
    <main>
      <InfoSection
        images={imagesPaleozoic}
        className={props.paleozoico}
        name={props.paleozoico}
      />
      <InfoSection
        images={imagesMesozoic}
        className={props.mesozoico}
        name={props.mesozoico}
      />
      <InfoSection
        images={imagesCenozoic}
        className={props.cenozoico}
        name={props.cenozoico}
      />
    </main>
  );
};

export default Main;
