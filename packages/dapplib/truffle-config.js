require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot dad random rural slow coral light army genius'; 
let testAccounts = [
"0xc7b88058090bc96d28956604cc31f3ac7e1d93309e895b920dab2aa9c2243d09",
"0x6ee259f8b25cd7b2a09143ad03ad2f2c066e47db38484ee1def62501215aa134",
"0xa5268744d9e4f4685ea2088cb880c545550c5d2390bacc0e8551332f637577f9",
"0x51c3247e32c24ead6ef46ffaef10a17bf22183d6369a03ec4d592b55cfc42474",
"0xce3a3dbd189f2af437c2f36da261021cb80c6e8acc3dd326be7b1d23224c498b",
"0x90c918227b0bfc94975ff5e06cfcab94a24be1f67cd92df510035a3baa8482db",
"0x066a8e319d237e9d9feefe20d322671dc3a41853dff0ece1b5b7ab4c44f0baf8",
"0xfe3fba05578db2c110ee3767bd2f1a19ea699aacb716db4e62a62f9c36afa242",
"0xc587708e34f1d894a5753ee4dd4de6a78ead222087176e56141e91ab3e246e1e",
"0xdf4c9df45db7ea4cbbc2194e481753b8c25858b2f36d0878d952cb2041981451"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

