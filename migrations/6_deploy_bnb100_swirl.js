/* global artifacts */
const BNBSwirl = artifacts.require('BNBSwirl')
const Verifier = artifacts.require('Verifier')
const hasherContract = artifacts.require('Hasher')


module.exports = function(deployer, network, accounts) {
  return deployer.then(async () => {
    const verifier = await Verifier.deployed()
    const hasherInstance = await hasherContract.deployed()
    await BNBSwirl.link(hasherContract, hasherInstance.address)
    const swirl = await deployer.deploy(BNBSwirl, verifier.address, '100000000000000000000', 20, accounts[0])
    console.log('BNB100 Swirl\'s address ', swirl.address)
  })
}
