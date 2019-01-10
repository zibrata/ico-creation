pragma solidity >=0.4.21 <0.6.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";


contract ScratchToken is ERC20 {
   // mapping (address => uint256) private _balances;
   // mapping (address => mapping (address => uint256)) private _allowed;
    address public owner;
    string public _name ;
    
    constructor() public {
        owner = msg.sender;
        _name = "lucile";
    
    }
/*
    function get_owner() public view returns(address ){
        return owner ;
    }
    
    function name() public view returns (string memory){
        return _name ;
    } 
*/
}


