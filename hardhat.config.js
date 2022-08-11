require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
let secrets = require("./secret.json");



module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    hardhat: {
    },
    mainnet: {
      url: "https://bsc-dataseed1.binance.org",
      accounts: [secrets.Pkey]
    },

    Bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: [secrets.Pkey]
    },

    RinkebyTestnet: {
      url: `https://rinkeby.infura.io/v3/${secrets.InfuraId}`,
      accounts: [secrets.Pkey]
    }
  },





  etherscan: {
    apiKey: {
      bscTestnet: "8FC3WJDD55GHZS6B33ZTZEIH9GZ4JJWMPK"
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  mocha: {
    timeout: 40000
  }
}


