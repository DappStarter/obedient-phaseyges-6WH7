require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remind artist gesture open furnace soldier'; 
let testAccounts = [
"0x8cdd597101d2570cff23fb2a2172557a092831e727ade40771ded9e5de2dea64",
"0x70c5ec2181895a2cebab12a261f5ae056c115848a1517d3203562c252167d093",
"0x9df011c517b2e81dc4ed9e749bb56ee2803c832cd91b327abc7bcd965a28c244",
"0x490f0bc4e71f9ad12c98ef9f57b54679574fe03f5e152dd3626a126e46da2428",
"0x59ff257863777909402b19f690475d2643a4a52ba9c45f22333443e135e2d8a4",
"0xb49c5a97e5b4ab178dbb1530c08f48517d9d3a5112b7af8b5819c6fd5a0c2e71",
"0x7bad6b41bf6716e91569be1cc40168915ec5e20d7798005a5b275d9bb1ec0b1a",
"0x67c1638a5b01ef11fe0c0e9d6e8f46fdd01f1e9da77e3bfba08e176d2a4e7c40",
"0x791760e41a65996b7865d27a10018adb8563418a29fcfd9a0db14efe531a8496",
"0x10a86ff18e6098be43aa8e4bf101396b64bf2abd5be0e817517a8a4a0796d9ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

