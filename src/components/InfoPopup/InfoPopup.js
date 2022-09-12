import React from "react";

const InfoPopup = ({close}) => {
    return (
        <div aria-label="Mais informações a respeito do fóssil em destaque">
            <button onClick={close} type='button' aria-label="close button">x</button>

            <img src="" alt="Reconstituição do periodo com o fóssil em destaque" />

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, explicabo ullam. Sapiente omnis minima numquam, expedita ea non labore odio repudiandae consectetur? Officia sapiente facilis repudiandae quia! Atque, quod. Pariatur.</p>
        </div>
    );
};

export default InfoPopup;