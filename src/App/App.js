import React from 'react';
import Header from '../components/Header/Header.js';
import Main from '../components/Main/Main.js';
import Footer from '../components/Footer/Footer.js';

const App = () => {
  return (
    <>
      <Header />
      <Main
        paleozoico="Paleozoico"
        mesozoico="Mesozoico"
        cenozoico="Cenozoico"
      />
      <Footer />
    </>
  );
};

export default App;
