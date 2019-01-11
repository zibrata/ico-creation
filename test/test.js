const ScratchToken = artifacts.require("ScratchToken");
var should = require('chai').should();

contract('ScratchToken', function ([_, _owner]) {
	beforeEach(async function () {
		this.token = await ScratchToken.new();
	});
    describe('name', function () {
      it('returns the name of tokens', async function () {
        (await this.token.name()).should.be.equals("Sapphire");
      });
    });
    describe('symbol', function () {
      it('returns the symbol of tokens', async function() {
      	(await this.token.symbol()).should.be.equals("SPR");
      });
  	});
});
