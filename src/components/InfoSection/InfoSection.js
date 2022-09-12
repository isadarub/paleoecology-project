import React from "react";
import InfoCard from "../InfoCard/InfoCard.js";
import { SectionStyled } from './style.js'

const InfoSection = (props) => {
    return (
        <SectionStyled>
            <h3>Nome do periodo</h3>
            <p>Breve descrição do periodo</p>
            <div aria-hidden>
                <InfoCard className="left"/>
                <InfoCard className="right"/>
                <InfoCard className="left"/>
                <InfoCard className="right"/>
            </div>
        </SectionStyled>
    );
};

export default InfoSection;