require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/vV2euGc_EHbEvsrP-gKtZdZL4DkWtqlG',
      accounts: [
        '4080e539f217d2542038ebd38f98e3c2f4c0e39711377adb30b9a7008ca3ab27',
      ],
    },
  },
}
