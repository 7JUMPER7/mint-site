// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract RandomPicsNFT is ERC721, Ownable {
    uint public mintPrice;
    uint public totalSupply;
    uint public maxSupply;
    uint public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint) public walletMints;

    constructor() payable ERC721('RandomPics', 'RP') {
        mintPrice = 0.01 ether;
        totalSupply = 0;
        maxSupply = 5000;
        maxPerWallet = 5;
    }

    function setIsPublicMintEnabled(bool _isPublicMintEnabled) external onlyOwner {
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
        baseTokenUri = _baseTokenUri;
    }

    function tokenURI(uint _tokenId) public view override returns(string memory) {
        require(_exists(_tokenId), 'Token does not exists!');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(_tokenId), ".json"));
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{ value: address(this).balance }('');
        require(success, 'withdraw failed');
    }

    function mint(uint _quan) public payable {
        require(isPublicMintEnabled, 'minting not enabled');
        require(msg.value == _quan * mintPrice, 'wrong mint value');
        require(totalSupply + _quan <= maxSupply, 'sold out');
        require(walletMints[msg.sender] + _quan <= maxPerWallet, 'exceed max wallet');

        for(uint8 i = 0; i < _quan; i++) {
            uint newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}