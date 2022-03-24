import React from "react";
import './css/NavBar.css';

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    const connectAccount = async () => {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            setAccounts(accounts);
        }
    }
    
    return(
        <header>
            <div className="logo glowText">Random Pics NFT</div>
            <div>
                {
                    (isConnected) ?
                    <div>Connected</div>
                    :
                    <button className="glowBox">Connect</button>
                }
            </div>
        </header>
    )
}

export default NavBar;