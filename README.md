# Swirl Cash

Swirl Cash is a non-custodial BSC privacy solution based on zkSNARKs, a fork of [Tornado Cash](https://tornado.cash). It improves transaction privacy by breaking the on-chain link between the recipient and destination addresses. It uses smart contracts that accept BNB deposits that can be withdrawn by a different address. Whenever BNB is withdrawn by the new address, there is no way to link the withdrawal to the deposit, ensuring complete privacy.

To make a deposit user generates a secret and sends its hash (called a commitment) along with the deposit amount to the Swirl smart contract. The contract accepts the deposit and adds the commitment to its list of deposits.

Later, the user decides to make a withdrawal. To do that, the user should provide a proof that he or she possesses a secret to an unspent commitment from the smart contract’s list of deposits. zkSnark technology allows that to happen without revealing which exact deposit corresponds to this secret. The smart contract will check the proof, and transfer deposited funds to the address specified for withdrawal. An external observer will be unable to determine which deposit this withdrawal came from.

## Requirements

1. `node v11.15.0`
2. `npm install -g npx`

## Usage on BSC Testnet

1. `npm install`
1. `vim .env` - add your BSC Testnet private key to deploy contracts
1. `npm run build` - this may take 10 minutes or more
1. `npm run migrate` - this will deploy all contracts on the BSC Testnet network
1. `npx truffle run verify ContractName@Address --network bsctest` - verify 'ContractName' with address 'Address' (add your bscscan API key in truffle-config.js)

For usage examples and ideas check [here](https://github.com/tornadocash/tornado-core/blob/master/cli.js)
