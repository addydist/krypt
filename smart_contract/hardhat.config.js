
require('@nomiclabs/hardhat-waffle')

module.exports={
  solidity:'0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.alchemyapi.io/v2/axJNYQFGAB-74GiJRUhjmHXcxb0G_Yfz',
      accounts:['0e55ab08cc75ad5174fbf488476d9248e8f62dd119318058e674c97b7c865ded']
    }
  }
}
