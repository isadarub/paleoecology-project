import React from "react";
import Popup from "reactjs-popup";
import InfoPopup from "../InfoPopup/InfoPopup";

const InfoCard = () => {
    return (
        <div aria-haspopup aria-label="Espaço de informações de fósseis">
            <Popup 
                trigger={
                    <button>
                        <img src="" alt="Imagem ilustrativa do fóssil" />
                    </button>   
                }
                position="center/center"
                modal
                lockScroll
            >
                {close => {
                    <InfoPopup close={close}/>
                }}
            </Popup> 
            <h4>Nome do fóssil</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure hic eius repellendus sapiente autem facilis.</p>
        </div>
    );
};

export default InfoCard;