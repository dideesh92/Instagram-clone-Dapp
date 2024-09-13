require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const private_key=process.env.private_key;
const alchemyurl=process.env.infuraurl;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"alchemy",
  networks:{
    localhost:{
      url:"http://127.0.0.1:8545/"

    },
    alchemy:{
      url:alchemyurl,
      accounts:[private_key]
    }
  },
  solidity: "0.8.20",
};