import { useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";
import randomPicsNFT from './RandomPicsNFT.json';
import './css/MainMint.css';
import NFTCarousel from "./NFTCarousel";

const randomPicsNFTAddress = '0x33a776EC8ff22941852A86a4EdEeECf6c5781A62';

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    useEffect(() => {

    });


    const handleMint = async () => {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                randomPicsNFTAddress,
                randomPicsNFT.abi,
                signer
            );

            try {
                const response = await contract.mint(mintAmount);
                console.log(response);
            } catch(e) {
                console.log(e);
            }
        }
    }

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
                    <div className="mintBG">
                        <div className="leftStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="rightStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="leftStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="rightStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="leftStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="rightStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="leftStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="rightStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="leftStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="rightStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="leftStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="rightStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="leftStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="rightStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="leftStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="rightStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="leftStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                        <div className="rightStrip"><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span><span>MINT</span></div>
                    </div>
                </div>
                <div className="mintWindow">
                    <h1>TEST</h1>
                    <h1>TEST</h1>
                    <h1>TEST</h1>
                    <h1>TEST</h1>
                    <h1>TEST</h1>
                </div>
            </div>
        </div>
    )
}

export default MainMint;