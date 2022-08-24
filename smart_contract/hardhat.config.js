require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/F5dAfJPFarUWBWW8_3Qv3PJa-YRjv75K',
      accounts: [ 'dfeb547beafc01b69e1a53921aee791b7be3fcac46f1150dd8c8a03bb18bc219' ]
    }
  }
}