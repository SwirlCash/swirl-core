/* global artifacts */
const Migrations = artifacts.require('Migrations')

module.exports = function(deployer) {
  if(deployer.network === 'mainnet' || deployer.network === 'bsctest') {
    return
  }
  deployer.deploy(Migrations)
}
