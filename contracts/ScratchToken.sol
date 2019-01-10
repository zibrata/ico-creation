pragma solidity >=0.4.21 <0.6.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";


contract ScratchToken is ERC20 {
    // mapping (address => uint256) private _balances;
   // mapping (address => mapping (address => uint256)) private _allowed;
    string  public _name = "Sapphire ";   // name of the token 
    string  public _symbol = "SPR";      // symbole of the token 
    uint8   public _decimals = 18 ;     // the number of decimals the token uses
   
    uint256 public _totalSupply;          // Total token supply.
    address public _owner = msg.sender;  // owner of the token 
    
    /* This creates an array with all balances */
    mapping (address => uint256) public balanceOf;
    
    constructor(
        uint256 initialSupply
        ) public {
        //_owner = msg.sender;
        balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens
    }

}


