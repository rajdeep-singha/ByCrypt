//https://eth-sepolia.g.alchemy.com/v2/GZwvzsC_FGuHNEhoKkaWOTnLY0TML68I
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:  '0.8.18',
    networks:{
      sepolia:{
        url: "https://eth-sepolia.g.alchemy.com/v2/GZwvzsC_FGuHNEhoKkaWOTnLY0TML68I",
        accounts: [process.env.PRIVATE_KEY]
      
    }
  }
}