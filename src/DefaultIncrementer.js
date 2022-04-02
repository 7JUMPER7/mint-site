import React, { useEffect, useRef, useState } from "react";
import './css/Incrementer.css';

const DefaultIncrementer = (
    {
        value, 
        fontSize = 32, 
        fontColor = 'white',
        animationTime = 300,
    }) => {        

    const [innerValue, setInnerValue] = useState(value);
    const [componentWidth, setComponentWidth] = useState(fontSize);
    const [componentHeight, setComponentHeight] = useState(fontSize);
    const component = useRef();

    useEffect(() => setComponentWidth(component.current.querySelector('.number').offsetWidth), []);

    useEffect(() => {
        if(value < innerValue) {
            decreaseValue();
        } else if(value > innerValue) {
            increaseValue();
        }

        let textElementSize = component.current.querySelector('.number').offsetHeight;
        setComponentHeight(textElementSize);
    }, [value]);

    const increaseValue = () => {
        let numbers = component.current.querySelector('.numbers');
        let lastNumbers = component.current.querySelectorAll('.number');
        let lastNumber = lastNumbers[lastNumbers.length - 1];
        let newNumber = document.createElement('div');
        newNumber.className = 'number';
        newNumber.style.fontSize = fontSize + 'px';
        newNumber.innerText = value;
        newNumber.style.marginTop = componentHeight + 'px';
        newNumber.style.color = fontColor;
        newNumber.style.transition = animationTime + 'ms all';
        newNumber.style.padding = '0 5px';

        numbers.appendChild(newNumber);
        setComponentWidth(newNumber.offsetWidth);
        lastNumber.style.marginTop = -componentHeight + 'px';
        newNumber.style.marginTop = 0;

        setTimeout(() => {
            numbers.removeChild(lastNumber);
        }, animationTime);

        setInnerValue(value);
    }
    const decreaseValue = () => {
        let numbers = component.current.querySelector('.numbers');
        let lastNumbers = component.current.querySelectorAll('.number');
        let lastNumber = lastNumbers[lastNumbers.length - 1];
        let newNumber = document.createElement('div');
        newNumber.className = 'number';
        newNumber.style.fontSize = fontSize + 'px';
        newNumber.innerText = value;
        newNumber.style.marginTop = -componentHeight + 'px';
        newNumber.style.color = fontColor;
        newNumber.style.transition = animationTime + 'ms all';
        newNumber.style.padding = '0 5px';

        numbers.appendChild(newNumber);
        setComponentWidth(newNumber.offsetWidth);
        lastNumber.style.marginTop = componentHeight + 'px';
        newNumber.style.marginTop = 0;

        setTimeout(() => {
            numbers.removeChild(lastNumber);
        }, animationTime);

        setInnerValue(value);
    }

    return(
        <div className="incrementerContainer" ref={component} style={{height: componentHeight, width: componentWidth, margin: '0 3px'}}>
            <div className="numbers" style={{height: componentHeight}}>
                <div className="number" style={{fontSize: fontSize, color: fontColor, transition: `${animationTime}ms all`, padding: '0 5px'}}>{innerValue}</div>
            </div>
        </div>
    );
}

export default DefaultIncrementer;