import React, { useState } from "react";
import './css/Incrementer.css';

const Incrementer = ({value, setValue, fontSize = 70, buttonsSize = 16, buttonsColor = 'white', buttonsHoverColor = '#87FF65'}) => {
    const [mouseOverUp, setMouseOverUp] = useState(false);
    const [mouseOverDown, setMouseOverDown] = useState(false);

    const incrementHandler = () => {
        setValue(value + 1);
    }

    const decrementHandler = () => {
        setValue(value - 1);
    }

    return(
        <div className="incrementerContainer">
            <div className="number"
                style={{fontSize: fontSize}}>{value}</div>
            <div className="buttons">
                <div className="button up" onClick={() => incrementHandler()} onMouseEnter={() => setMouseOverUp(true)} onMouseLeave={() => setMouseOverUp(false)}>
                    <svg width={buttonsSize} height={buttonsSize} fill={(mouseOverUp) ? buttonsHoverColor : buttonsColor} viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                </div>
                <div className="button down" onClick={() => decrementHandler()} onMouseEnter={() => setMouseOverDown(true)} onMouseLeave={() => setMouseOverDown(false)}>
                    <svg width={buttonsSize} height={buttonsSize} fill={(mouseOverDown) ? buttonsHoverColor : buttonsColor} viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Incrementer;