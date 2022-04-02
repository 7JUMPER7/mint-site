import React, { useContext, useEffect, useState } from "react";
import "./css/MintWindow.css";
import { ethers, BigNumber } from "ethers";
import randomPicsNFT from './RandomPicsNFT.json';
import UserContext from "./UserContext";
import Incrementer from "./Incrementer";
import DefaultIncrementer from "./DefaultIncrementer";

const randomPicsNFTAddress = '0x33a776EC8ff22941852A86a4EdEeECf6c5781A62';

const MintWindow = () => {
    const PRICE = 0.01;
    const {accounts, setAccounts} = useContext(UserContext);
    const [mintAmount, setMintAmount] = useState(1);
    const [ethAmount, setEthAmount] = useState(mintAmount * PRICE);
    const isConnected = Boolean(accounts[0]);

    useEffect(() => {
        let amount = parseFloat((mintAmount * PRICE).toFixed(5));
        setEthAmount(amount);
    }, [mintAmount]);

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
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther(ethAmount.toString())
                });
                console.log(response);
            } catch(e) {
                console.log(e);
            }
        }
    }

    return(
        <div className="mintWindow">
            <h1>
                <span>Mint for </span>
                <DefaultIncrementer value={ethAmount} fontColor={'#c9ffba'}></DefaultIncrementer>
                <span> ETH</span>
            </h1>
            <Incrementer 
                value={mintAmount} 
                setValue={setMintAmount} 
                minValue={1}
                maxValue={10}
                fontSize={70} 
                fontColor={'white'}
                buttonsSize={24} 
                buttonsColor={'white'}
                buttonsHoverColor={'#87FF65'}
                buttonsOffset={15}
                buttonsMargin={-10}
                animationTime={300}
                componentMargin={20}
            ></Incrementer>
            {
                isConnected ?
                <button className="glowBox" onClick={() => handleMint()}>Mint Now</button>
                :
                <h3>Connect wallet first</h3>
            }
        </div>
    );
}

export default MintWindow;