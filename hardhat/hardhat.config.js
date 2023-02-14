require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

// Add the alfajores network to the configuration
module.exports = {
  solidity: "0.8.17",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [process.env.MNEMONIC_KEY],
      chainId: 44787,
    },
  },
};