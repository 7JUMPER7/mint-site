import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import randomPicsNFT from './RandomPicsNFT.json';
import './css/MainMint.css';

import Image from "./NFTs/nft1.png";

const randomPicsNFTAddress = '0x33a776EC8ff22941852A86a4EdEeECf6c5781A62';

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

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
            <div className="NFTContainer">
                <div className="NFTCard glowBox">
                    <img src={Image} alt="nft1.png"></img>
                </div>
            </div>
            <div className="NFTContainer">
                <div className="NFTCard glowBox">
                    <img src={Image} alt="nft1.png"></img>
                </div>
            </div>
            <div className="NFTContainer">
                <div className="NFTCard glowBox">
                    <img src={Image} alt="nft1.png"></img>
                </div>
            </div>
            <div className="NFTContainer">
                <div className="NFTCard glowBox">
                    <img src={Image} alt="nft1.png"></img>
                </div>
            </div>
            <div className="NFTContainer">
                <div className="NFTCard glowBox">
                    <img src={Image} alt="nft1.png"></img>
                </div>
            </div>
            <div className="NFTContainer">
                <div className="NFTCard glowBox">
                    <img src={Image} alt="nft1.png"></img>
                </div>
            </div>
        </div>
    )
}

export default MainMint;