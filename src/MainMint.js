import { useEffect } from "react";
import './css/MainMint.css';
import NFTCarousel from "./NFTCarousel";
import MintWindow from "./MintWindow";

const MainMint = () => {

    const handleResize = () => {
        const mintBG = document.querySelector('.mintBG');
        mintBG.innerHTML = '';
        const rowsCount = Math.ceil(window.innerHeight / 76.5);
        const colsCount = Math.ceil((window.innerWidth + 300) / 194);

        for(let i = 0; i < rowsCount; i++) {
            let row = document.createElement('div');

            if(i % 2 !== 0) {
                row.className = 'leftStrip';
            } else {
                row.className = 'rightStrip';
            }

            for(let j = 0; j < colsCount; j++) {
                let word = document.createElement('span');
                word.innerText = 'MINT';
                row.appendChild(word);
            }

            mintBG.appendChild(row);
        }
    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    return(
        <div>
            <div className="part part1">
                <NFTCarousel></NFTCarousel>
                <div className="mainPlate">
                    <h1>Random Pics NFT</h1>
                    <p>Try to buy!</p>
                </div>
            </div>
            <div className="part part2">
                <div className="mintBGContainer">
                    <div className="mintBG"></div>
                </div>
                <MintWindow></MintWindow>
            </div>
        </div>
    )
}

export default MainMint;