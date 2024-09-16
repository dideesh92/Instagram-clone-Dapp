import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate(); 

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
     
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setWalletAddress(account);
        navigate('/page1');

        const provider = window.ethereum;
        const contract = new provider.Contract(contractAddress, contractABI); 
        const registered = await contract.methods.isUserRegistered(account).call();
        setIsRegistered(registered);

        
       
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center">
      <h1 className="text-5xl text-white font-bold italic serif mb-8">Instagram Dapp</h1>
        {!walletAddress ? (
          <button 
            onClick={connectWallet} 
            className="bg-blue-500 text-white p-3 px-6 rounded-full mt-4 hover:bg-blue-600 transition-all">
            Connect Wallet
          </button>
        ) : (
          <p>Wallet connected: {walletAddress}</p>
        )}
      </div>
    </div>
  );
}

export default MainContent;
