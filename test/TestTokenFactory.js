const TokenFactory = artifacts.require("TokenFactory");

contract("TokenFactory", () => {
  it("should create erc20 token", async () => {
    const instance = await TokenFactory.deployed();
    const tx = await instance.createToken("Kyoto", "KYO", 1e6); // emits an IERC20 Transfer event where `to` address is the TokenFactory contract address
    const factoryAddress = instance.address;
    const transferToAddress = web3.utils.toChecksumAddress(tx.receipt.to);
    // console.log(factoryAddress);
    // console.log(transferToAddress);
    assert.equal(transferToAddress, factoryAddress, "must equal token factory contract address");
  });
})