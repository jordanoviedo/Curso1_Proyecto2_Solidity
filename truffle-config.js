/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
   privateKeys: ['a2f1295c2d3b2c578f693f7a3cfa0f73a74ffe0194d804d291964c6bf038abb4'],
   providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',

})
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    binanceTestnet: {
      provider: () => provider,
      network_id: "97",
      gas: 1000000
    },
    develop: {
      port: 8545
    }
  }
};
