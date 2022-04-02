import React, { useContext } from "react";
import './css/NavBar.css';
import UserContext from "./UserContext";

const NavBar = () => {
    const {accounts, setAccounts} = useContext(UserContext);
    const isConnected = Boolean(accounts[0]);

    const connectAccount = async () => {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            setAccounts(accounts);

            window.ethereum.on('accountsChanged', (accs) => {
                setAccounts(accs);
            })
        } else {
            console.log('Provider not found.');
        }
    }

    const getShortenAddress = (address) => {
        let first = address.slice(0, 5);
        let second = address.slice(-4);
        return first + '...' + second;
    }
    
    return(
        <header>
            <div className="logo glowText">Random Pics NFT</div>
            <div>
                {
                    (isConnected) ?
                    <div>{getShortenAddress(accounts[0])}</div>
                    :
                    <button className="glowBox" onClick={() => connectAccount()}>Connect wallet</button>
                }
            </div>
        </header>
    )
}

export default NavBar;