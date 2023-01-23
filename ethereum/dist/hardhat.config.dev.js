"use strict";

require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/450ce672d6094e9d871bb9c01e5f8c5c",
      //Infura url with projectId
      accounts: ["7703891e1030bfa1160279cac9310e6e198df980f1fc1f2c19c0a0d9f2214717"] // add the account that will deploy the contract (private key)

    }
  }
};