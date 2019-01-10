var ScratchToken = artifacts.require("../contracts/ScratchToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ScratchToken);
};
