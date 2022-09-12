import React from "react";
import title from '../../assets/img/title.png';

const Header = () => {
    return (
        <header>    
            <h1>
                <img src={title} width="900px" alt="Escrito: Do ovo à galinha"/>
            </h1>
            <h2>Um guia digital interativo pela evolução da oviparidade das aves.</h2>
        </header>
    );
};

export default Header;