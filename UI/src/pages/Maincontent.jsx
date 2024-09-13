import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate(); // For navigation

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      // MetaMask is available
      try {
        // Request MetaMask accounts
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setWalletAddress(account);
        navigate('/page1');

        // Use MetaMask's ethereum object directly for contract interaction
        const provider = window.ethereum;
        const contract = new provider.Contract(contractAddress, contractABI); // Adjust this line for contract interaction
        const registered = await contract.methods.isUserRegistered(account).call();
        setIsRegistered(registered);

        // Redirect to page1 after successful connection
       
      } catch (error) {
        console.error("MetaMask connection error:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
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
