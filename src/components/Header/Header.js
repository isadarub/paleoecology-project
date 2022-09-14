import React from 'react';
import title from '../../assets/img/title.png';
import { HeaderContainer } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={title} alt="Escrito: Do ovo à galinha" />
      <p>
        Ao fazermos à pergunta "O que veio primeiro? O ovo ou a galinha?", a
        evolução esclarece que o surgimento do ovo foi bem anterior ao das
        galinhas. Nesse guia interativo, você poderá navegar pelas eras do Éon
        Fanerozoico, e entender um pouco melhor do que sabemos atualmente sobre
        a relação evolutiva entre aves e a oviparidade.
      </p>
    </HeaderContainer>
  );
};

export default Header;
