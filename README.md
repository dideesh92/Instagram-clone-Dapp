# Instagram Decentralized Application

This project is a decentralized version of Instagram, allowing users to post images, with all content displayed on a common page accessible by all users. Built on blockchain technology, this DApp ensures that images are stored immutably, offering enhanced security and decentralized storage.

## 📜 Objective

The primary goal of this application is to create an Instagram-like platform that protects user images as immutable records on the Ethereum blockchain. By leveraging decentralized technologies, the application ensures that no single entity controls the data, guaranteeing transparency, security, and tamper-proof content storage.

## 🚀 Features

- **Blockchain-powered security**: All posts are secured on the Ethereum blockchain, ensuring images are immutable and tamper-proof.
- **Scalability**: Efficient use of blockchain and decentralized storage technologies ensures the application can scale as user numbers grow.
- **Instant verification**: Transactions for posting images are instantly verified and recorded on the blockchain, providing a trustless system for users.

## 🔧 Built With

- **HTML**
- **CSS & Tailwind CSS**: For styling and responsive UI design.
- **React**: Frontend framework for building a seamless user experience.
- **Solidity**: Smart contracts for managing user registration and posts.
- **Ethereum & Hardhat**: Ethereum blockchain for storing posts and Hardhat for local blockchain development and testing.
- **Ethers.js**: For interacting with the Ethereum network and smart contracts.

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/instagram-dapp.git
   ```

2. Navigate to the project directory:
   ```bash
   cd instagram-dapp
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

## 📦 Deployment

To deploy the smart contracts to an Ethereum testnet (e.g., Sepolia), follow these steps:

1. Update your `.env` file with your Ethereum provider URL and private key.
2. Deploy the smart contracts using Hardhat:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

3. After deployment, update your frontend with the new contract address.

## 📝 Smart Contract Overview

- **User Registration**: Only one user can register per wallet address. Each user is identified by their MetaMask wallet.
- **Post Creation**: Users can upload images that are stored using IPFS (via Pinata), and the metadata is stored on the blockchain.
- **Immutable Records**: Once a post is uploaded, it cannot be modified or deleted, ensuring authenticity and integrity.

## ✨ Key Features

- **Decentralized Storage**: Images are stored using IPFS, ensuring that no centralized server can modify or delete user posts.
- **Ethereum-based Security**: All transactions are verified on the Ethereum blockchain, ensuring that posts are immutable and protected from tampering.
- **User-Friendly Interface**: The application mimics the simplicity of Instagram while offering the added benefits of blockchain technology.
- **MetaMask Integration**: Secure wallet connection for user registration, account management, and transaction handling.

## 📖 How It Works

1. **User Registration**: Users must connect their MetaMask wallet to create an account. Each wallet can only register one account.
2. **Posting Images**: Once registered, users can upload images to the decentralized platform. The images are stored on IPFS, while their metadata is recorded on the Ethereum blockchain.
3. **Common Page**: All uploaded images are displayed on a shared page, which is accessible to all users on the platform.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request with your ideas for improving the platform.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##Demo Video Link



