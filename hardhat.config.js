// hardhat.config.js
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_PROJECT_ID = "c1c972354fc0452e8252003c81722dc4";
const PRIVATE_KEY= "d4bdf53786045fc2fea2b1e00d4bc0678bef2baa290c17bb01747cd6f70ccd30";
const ETHERSCAN_API_KEY= "29T29ITKDKHA6C18GJAAPFC9EVH8NTGVME";

module.exports = {
  solidity: "0.8.2",
  networks: {
    // ropsten: {
    //   url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
    //   accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    // },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  } 
};