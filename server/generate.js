const { secp256k1 } = require("ethereum-cryptography/secp256k1") 
const { toHex } = require("ethereum-cryptography/utils"); 

function generateKeys(){
    keys = {}
    for(let i=0; i<3; i++){
        const privateKey = toHex(secp256k1.utils.randomPrivateKey());
        const publicKey = toHex(secp256k1.getPublicKey(privateKey));
        const address = publicKey.slice(-20);
        keys["key "+i] = [privateKey, publicKey, address]
    }
    return keys
}
console.log(generateKeys())

// {
//   'key 0': [
//     'd6044e143c58f2453a3a59b42db743ab282d01d665bbfac04c27a09b7786336e',
//     '0223ed76f8bf45aa4f3e07946c884cfa44223c7eacf9ce4c4d1892d4fb76a9dac7',
//     '4c4d1892d4fb76a9dac7'
//   ],
//   'key 1': [
//     '3a8c3c87290c6668b6f85228c5b138b919f1c287bf97ee48bea568cd6ec34960',
//     '03aa9f6720969a2558d5fc3a45c8b3f91e602283d549a6ae85ac3feb20845c7bdb',
//     'ae85ac3feb20845c7bdb'
//   ],
//   'key 2': [
//     '19947a02e6c9ccc7506e33ea3778f337a8fe15ba4b736c3faa76c21a4f603093',
//     '039408b7a644def03471790140c43b94373e1e5ec6ba31146c8deb6e39f7d98928',
//     '146c8deb6e39f7d98928'
//   ]
// }