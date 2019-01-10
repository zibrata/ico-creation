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

    describe('approve', function () {
      describe('when the spender is not the zero address', function () {
        const spender = recipient;
  
        describe('when the sender has enough balance', function () {
          const amount = 100;
  
          it('emits an approval event', async function () {
            const { logs } = await this.token.approve(spender, amount, { from: owner });
  
            expectEvent.inLogs(logs, 'Approval', {
              owner: owner,
              spender: spender,
              value: amount,
            });
          });
  
          describe('when there was no approved amount before', function () {
            it('approves the requested amount', async function () {
              await this.token.approve(spender, amount, { from: owner });
  
              (await this.token.allowance(owner, spender)).should.be.bignumber.equal(amount);
            });
          });
  
          describe('when the spender had an approved amount', function () {
            beforeEach(async function () {
              await this.token.approve(spender, 1, { from: owner });
            });
  
            it('approves the requested amount and replaces the previous one', async function () {
              await this.token.approve(spender, amount, { from: owner });
  
              (await this.token.allowance(owner, spender)).should.be.bignumber.equal(amount);
            });
          });
        });
  
        describe('when the sender does not have enough balance', function () {
          const amount = 101;
  
          it('emits an approval event', async function () {
            const { logs } = await this.token.approve(spender, amount, { from: owner });
  
            expectEvent.inLogs(logs, 'Approval', {
              owner: owner,
              spender: spender,
              value: amount,
            });
          });
  
          describe('when there was no approved amount before', function () {
            it('approves the requested amount', async function () {
              await this.token.approve(spender, amount, { from: owner });
  
              (await this.token.allowance(owner, spender)).should.be.bignumber.equal(amount);
            });
          });
  
          describe('when the spender had an approved amount', function () {
            beforeEach(async function () {
              await this.token.approve(spender, 1, { from: owner });
            });
  
            it('approves the requested amount and replaces the previous one', async function () {
              await this.token.approve(spender, amount, { from: owner });
  
              (await this.token.allowance(owner, spender)).should.be.bignumber.equal(amount);
            });
          });
        });
      });
  
      describe('when the spender is the zero address', function () {
        const amount = 100;
        const spender = ZERO_ADDRESS;
  
        it('reverts', async function () {
          await shouldFail.reverting(this.token.approve(spender, amount, { from: owner }));
        });
      });
    });
})
