pragma solidity >=0.4.21 <0.6.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract ScratchToken is ERC20 {
    mapping (address => uint256) private _balances; // array with all adress 
    string  public _name     = "Sapphire";          // name of the token 
    string  public _symbol   = "SPR";              // symbole of the token 
    uint8   public _decimals = 18 ;             // the number of decimals the token uses
    uint256 public _totalSupply;               // Total token supply.
    address public _owner;                    // owner of the token 
    
    
    constructor() public {
        _owner = msg.sender;
        _balances[_owner] = 10;
    }

}



