import React, { useEffect, useRef, useState } from "react";
import './css/Incrementer.css';

const Incrementer = (
    {
        value, 
        setValue, 
        minValue = 1, 
        maxValue = 100,
        fontSize = 70, 
        fontColor = 'white',
        buttonsSize = 16, 
        buttonsColor = 'white', 
        buttonsHoverColor = '#87FF65', 
        buttonsOffset = 10,
        buttonsMargin = -4,
        animationTime = 300,
        componentMargin = 10
    }) => {
        
    const [mouseOverUp, setMouseOverUp] = useState(false);
    const [mouseOverDown, setMouseOverDown] = useState(false);
    const [componentWidth, setComponentWidth] = useState(fontSize);
    const [componentHeight, setComponentHeight] = useState(fontSize);
    const [numberHeight, setNumberHeight] = useState(fontSize);
    const component = useRef();

    useEffect(() => {
        setComponentWidth(component.current.querySelector('.number').offsetWidth + buttonsSize + buttonsOffset);
        let textElementSize = component.current.querySelector('.number').offsetHeight;
        let buttonsElementSize = component.current.querySelector('.buttons').offsetHeight;
        setComponentHeight((textElementSize > buttonsElementSize) ? textElementSize : buttonsElementSize);
        setNumberHeight(textElementSize);
    }, [buttonsSize, buttonsOffset])
    

    const incrementHandler = () => {
        if(value < maxValue) {
            increaseValue();
        }
    }
    const decrementHandler = () => {
        if(value > minValue) {
            decreaseValue();
        }
    }

    const increaseValue = () => {
        let numbers = component.current.querySelector('.numbers');
        let lastNumbers = component.current.querySelectorAll('.number');
        let lastNumber = lastNumbers[lastNumbers.length - 1];
        let newNumber = document.createElement('div');
        newNumber.className = 'number';
        newNumber.style.fontSize = fontSize + 'px';
        newNumber.innerText = value + 1;
        newNumber.style.marginTop = componentHeight + 'px';
        newNumber.style.color = fontColor;
        newNumber.style.transition = animationTime + 'ms all';

        numbers.appendChild(newNumber);
        setComponentWidth(newNumber.offsetWidth + buttonsSize + buttonsOffset);
        lastNumber.style.marginTop = -componentHeight + 'px';
        newNumber.style.marginTop = 0;

        setTimeout(() => {
            numbers.removeChild(lastNumber);
        }, animationTime);

        setValue(value + 1);
    }
    const decreaseValue = () => {
        let numbers = component.current.querySelector('.numbers');
        let lastNumbers = component.current.querySelectorAll('.number');
        let lastNumber = lastNumbers[lastNumbers.length - 1];
        let newNumber = document.createElement('div');
        newNumber.className = 'number';
        newNumber.style.fontSize = fontSize + 'px';
        newNumber.innerText = value - 1;
        newNumber.style.marginTop = -componentHeight + 'px';
        newNumber.style.color = fontColor;
        newNumber.style.transition = animationTime + 'ms all';

        numbers.appendChild(newNumber);
        setComponentWidth(newNumber.offsetWidth + buttonsSize + buttonsOffset);
        lastNumber.style.marginTop = componentHeight + 'px';
        newNumber.style.marginTop = 0;

        setTimeout(() => {
            numbers.removeChild(lastNumber);
        }, animationTime);

        setValue(value - 1);
    }

    return(
        <div className="incrementerContainer" ref={component} style={{height: componentHeight, width: componentWidth, margin: componentMargin}}>
            <div className="numbers" style={{height: numberHeight}}>
                <div className="number" style={{fontSize: fontSize, color: fontColor, transition: `${animationTime}ms all`}}>{value}</div>
            </div>
            <div className="buttons">
                <div className="button up" onClick={() => incrementHandler()} onMouseEnter={() => setMouseOverUp(true)} onMouseLeave={() => setMouseOverUp(false)}>
                    <svg style={{margin: `${buttonsMargin}px 0`}} width={buttonsSize} height={buttonsSize} fill={(mouseOverUp) ? buttonsHoverColor : buttonsColor} viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
                </div>
                <div className="button down" onClick={() => decrementHandler()} onMouseEnter={() => setMouseOverDown(true)} onMouseLeave={() => setMouseOverDown(false)}>
                    <svg style={{margin: `${buttonsMargin}px 0`}} width={buttonsSize} height={buttonsSize} fill={(mouseOverDown) ? buttonsHoverColor : buttonsColor} viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Incrementer;