// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bookton {
    address public owner;
    uint256 public bank;
    bool private locked;
    mapping(address => uint256) public userCredits;

    event Purchase(address indexed buyer, uint256 amount, uint256 creditsEarned);
    event PurchaseWithCredits(address indexed buyer, uint256 amount, uint256 creditsSpent);

    constructor(address contractOwner) {
        owner = contractOwner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier preventReentrancy() {
        require(!locked, "Reentrant call detected");
        locked = true; 
        _; 
        locked = false; 
    }

    function purchase(uint256 amount) external payable preventReentrancy {
        require(msg.value >= amount && amount > 0, "Invalid ether amount sent");

        uint credit = (msg.value / 10);
        bank += msg.value - credit;
        userCredits[msg.sender] += credit;
        emit Purchase(msg.sender, amount, amount / 10); // Giving 10% of purchase amount as credits
    }


    function purchaseWithCredits(uint256 amount) external preventReentrancy {
        require(amount > 0, "Amount must be greater than zero");
        require(userCredits[msg.sender] >= amount, "Insufficient credits");
        userCredits[msg.sender] -= amount;
        // Simulating a purchase by emitting an event
        emit PurchaseWithCredits(msg.sender, amount, amount);
    }

    function withdrawCredits(uint256 amount, address payable recipient) public payable preventReentrancy{
        require(amount > 0 && amount <= userCredits[msg.sender], "Invalid amount to withdraw");
        userCredits[msg.sender] -= amount;
        recipient.transfer(msg.value);
    }

    function ownerWithdraw(uint256 amount) external onlyOwner {
        // Implement the logic for the owner to withdraw credits from the contract
    }

    function getCreditBalance() public view returns (uint)  {
        // Implement the logic for the owner to withdraw credits from the contract
          return userCredits[msg.sender];
    }
}

