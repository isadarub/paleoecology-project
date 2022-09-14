import React from 'react';
import { FooterContainer } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <section>
        <h5>Elaborado e produzido por:</h5>
        <ul>
          <li>
            <p>Isabelle Daru</p>
          </li>
          <li>
            <p>João Kurowski</p>
          </li>
        </ul>
      </section>
      <p>
        Candidatos ao bacharel em Ciências Biológicas pela Universidade Federal
        do Paraná (UFPR).
      </p>
      <h5>Curitiba, 2022</h5>
    </FooterContainer>
  );
};

export default Footer;
