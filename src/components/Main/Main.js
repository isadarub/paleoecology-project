import React from 'react';
import InfoSection from '../InfoSection/InfoSection.js';
import { data } from '../../assets/data/data.js';

const Main = () => {

  const mountSections = data.map(period => {
    return (
      <InfoSection key={period.title} period={period.title} description={period.description} fossils={period.fossils}/>
    )
  })

  return (
    <main>
      {mountSections}
    </main>
  );
};

export default Main;
