// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloBlockchain {
    // State variable stored permanently on the blockchain
    string private message;

    // Event that logs when the message is updated
    event MessageUpdated(address indexed sender, string oldMessage, string newMessage);

    // Constructor to initialize the message at deployment
    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    // Function to update the message
    function updateMessage(string memory newMessage) public {
        string memory oldMessage = message;
        message = newMessage;
        emit MessageUpdated(msg.sender, oldMessage, newMessage);
    }

    // Function to retrieve the current message
    function getMessage() public view returns (string memory) {
        return message;
    }
}
