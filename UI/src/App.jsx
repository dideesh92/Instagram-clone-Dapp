// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';

// function MainContent() {
//   const [posts, setPosts] = useState([]);
//   const [file, setFile] = useState(null);
//   const [caption, setCaption] = useState('');
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [isRegistered, setIsRegistered] = useState(false);

//   // Handle MetaMask connection
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         const account = ethers.utils.getAddress(accounts[0]);
//         setWalletAddress(account);

//         // Check if the user is registered on the blockchain
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const contract = new ethers.Contract(contractAddress, contractABI, provider);
//         const registered = await contract.isUserRegistered(account);
//         setIsRegistered(registered);
//       } catch (error) {
//         console.error("MetaMask connection error:", error);
//       }
//     } else {
//       alert("Please install MetaMask!");
//     }
//   };

//   // Handle file input change
//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   // Handle uploading the file and adding a caption
//   const uploadFile = async () => {
//     // Upload to IPFS and get the image URL
//     const imageUrl = URL.createObjectURL(file);

//     const newPost = {
//       username: "new_user",
//       imageUrl: imageUrl,
//       caption: caption,
//       comments: [],
//       likes: 0,
//       timeAgo: "Just now"
//     };

//     // Add post to the blockchain
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(contractAddress, contractABI, signer);

//     await contract.addPost(newPost.imageUrl, newPost.caption);

//     setPosts([newPost, ...posts]);
//     setFile(null);
//     setCaption(''); // Clear caption input after posting
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] min-h-screen">
//       <div className="bg-white p-4 shadow-md min-h-screen">
//         <h1 className="text-xl serif italic font-bold mb-4">Instagram Dapp</h1>
//         {!walletAddress ? (
//           <button 
//             onClick={connectWallet} 
//             className="bg-blue-500 text-white p-2 w-full rounded mt-2">
//             Connect Wallet
//           </button>
//         ) : isRegistered ? (
//           <>
//             {/* Upload and other options go here */}
//             <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
//             <label htmlFor="file-upload" className="cursor-pointer block text-black p-2 rounded mt-4 hover:bg-gray-100">
//               Create
//             </label>
//             {file && (
//               <>
//                 <input 
//                   type="text" 
//                   placeholder="Add a caption..." 
//                   className="border p-2 w-full mt-2" 
//                   value={caption} 
//                   onChange={e => setCaption(e.target.value)} 
//                 />
//                 <button 
//                   onClick={uploadFile} 
//                   className="bg-green-500 text-white p-2 w-full rounded mt-2">
//                   Post
//                 </button>
//               </>
//             )}
//           </>
//         ) : (
//           <p>Please register to post content.</p>
//         )}
//       </div>

//       {/* Main content with posts */}
//       <div className="container mx-auto px-4 py-6">
//         {posts.map((post, index) => (
//           <div key={index} className="max-w-xl mx-auto bg-white p-4 shadow-lg mt-4 rounded-lg">
//             {/* Post layout */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MainContent;

import React from 'react'
import MainContent from './pages/Maincontent'
import Page1 from './pages/page1'


const App = () => {
  return (
    <div>
      <Page1/>
      <MainContent/>
    </div>
  )
}

export default App

