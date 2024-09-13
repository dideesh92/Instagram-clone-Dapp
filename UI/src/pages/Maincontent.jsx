import React, { useState } from 'react';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate(); // For navigation

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0]);
        setWalletAddress(account);

        // Check if the user is registered on the blockchain
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        const registered = await contract.isUserRegistered(account);
        setIsRegistered(registered);

        // Redirect to HomePage after successful connection
        navigate('/home');
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] min-h-screen">
      <div className="bg-white p-4 shadow-md min-h-screen">
        <h1 className="text-xl serif italic font-bold mb-4">Instagram Dapp</h1>
        {!walletAddress ? (
          <button 
            onClick={connectWallet} 
            className="bg-blue-500 text-white p-2 w-full rounded mt-2">
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
