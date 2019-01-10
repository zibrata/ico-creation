pragma solidity >=0.4.21 <0.6.0;

import "./IERC20.sol";

contract ScratchToken is IERC20 {
    address public owner;
    string public _name; 
    
    constructor() public {
        owner = msg.sender;
        _name = "lucile";
    
    }

    function get_owner() public view returns(address ){
        return owner ;
    }
    
    function name() public view returns (string memory){
        return _name ;
    } 

}


