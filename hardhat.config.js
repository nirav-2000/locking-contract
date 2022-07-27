require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "matic", 
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: ["0x40d07de072aee10fb40a44c5b48d6efeb802b685292b7872296c7160acc742cd"],
    }
  },
  etherscan: {
    apiKey: "5RX6V4Y837163QEZICJT4GBFXXW77DAGYT",
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}