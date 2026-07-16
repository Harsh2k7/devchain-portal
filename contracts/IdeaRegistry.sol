// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdeaRegistry {
    struct Innovation {
        uint id;
        address author;
        string title;
        string contentHash; // Distributed storage mapping (IPFS hash link)
        uint timestamp;
    }

    uint public innovationCount = 0;
    mapping(uint => Innovation) public innovations;

    event IdeaSubmitted(uint indexed id, address indexed author, string title);

    function submitIdea(string memory _title, string memory _contentHash) public {
        innovationCount++;
        innovations[innovationCount] = Innovation(
            innovationCount,
            msg.sender,
            _title,
            _contentHash,
            block.timestamp
        );
        emit IdeaSubmitted(innovationCount, msg.sender, _title);
    }
}

