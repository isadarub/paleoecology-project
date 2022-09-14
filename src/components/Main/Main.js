import React from 'react';
import InfoSection from '../InfoSection/InfoSection.js';
import { data } from '../../assets/data/data.js';
import { MainContent } from './styled.js';

const Main = () => {
  const mountSections = data.map(age => {
    return (
      <InfoSection
        key={age.title}
        age={age.title}
        description={age.description}
        fossils={age.fossils}
      />
    );
  });

  return <MainContent>{mountSections}</MainContent>;
};

export default Main;
