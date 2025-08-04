require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();   // importing dotenv -> this is a Node.js library -> used to load sensitive information (like private key, RPC urls, etc) in our Node.js environment without hardcoding it in your code.


/** @type import('hardhat/config').HardhatUserConfig */

//  module.exports -> used to expprt the configurations in Node.js -> Hardhat reads this exported object to know how to compile, run and deploy your smart contracts

module.exports = {
  solidity: "0.8.28", // tells hardhat the solidity version we're using

  networks:{  // isme ye details hoti hain ki hardhat ko blockchain network se kase connect krna hai
    auroraTestnet:{
      url:process.env.RPC_URL, // this is the RPC URL -> use of which we'll connect to the blockchain
      accounts: [process.env.PRIVATE_KEY] // private key -> used to sign the transactions
    }
  },
  
};
