// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./Token.sol";

contract TokenFactory {
  function createToken(string memory _name, string memory _symbol, uint256 _totalSupply) public returns(address) {
    Token token = new Token(_name, _symbol, _totalSupply);
    return address(token);
  }
}
