import React from 'react';
import Header from '../components/Header/Header.js';
import Main from '../components/Main/Main.js';
import Footer from '../components/Footer/Footer.js';
import { MainContent } from './style';

const App = () => {
  return (
    <MainContent>
      <Header />
      <Main />
      <Footer />
    </MainContent>
  );
};

export default App;
