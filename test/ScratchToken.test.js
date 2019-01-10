const ScratchToken = artifacts.require("ScratchToken");

contract('SratchToken', function ([_, _owner]) {
    describe('name', function () {
      it('returns the name of tokens', async function () {
        (await this.token.name()).should.be.equals("sapphire");
      });
    });
    describe('total supply', function () {
        it('returns the total amount of tokens', async function () {
          (await this.token.totalSupply()).should.be.equal(100);
        });
    });
})
