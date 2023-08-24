// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract AEROONROAD is ERC721A {
    address public owner;
    uint256 public maxQuantity = 5;
    string public baseUrl = "https://gateway.pinata.cloud/ipfs/Qmf7JfNBLQRSvH74HDKgcapuAfvkyoWZMPgFnNRgoWV1tK/?_gl=1*8m4fs5*_ga*MjA0ODg0MDQ0Ny4xNjkxODM4MDEz*_ga_5RMPXG14TE*MTY5MjkwMzI4My40LjEuMTY5MjkwNDg5Ny42MC4wLjA.";
    string public prompt = "AN AEROPLANE ON THE ROAD";

    constructor() ERC721A("AEROONROAD", "ARD") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action!");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner {
        require(totalSupply() + quantity <= maxQuantity, "You can not mint more than 5");
        _mint(msg.sender, quantity);
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }
}
