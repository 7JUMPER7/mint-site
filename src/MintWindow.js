import React, { useContext, useState } from "react";
import "./css/MintWindow.css";
import { ethers, BigNumber } from "ethers";
import randomPicsNFT from './RandomPicsNFT.json';
import UserContext from "./UserContext";
import Incrementer from "./Incrementer";

const randomPicsNFTAddress = '0x33a776EC8ff22941852A86a4EdEeECf6c5781A62';

const MintWindow = () => {
    const {accounts, setAccounts} = useContext(UserContext);
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
        <div className="mintWindow">
            <h1>Mint for 0.01 ETH</h1>
            <Incrementer 
                value={mintAmount} 
                setValue={setMintAmount} 
                fontSize={70} 
                buttonsSize={24} 
                buttonsColor={'white'}
                buttonsHoverColor={'#87FF65'}
            ></Incrementer>
        </div>
    );
}

export default MintWindow;