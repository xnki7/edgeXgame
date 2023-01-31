//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract EdgeXGame is ERC721URIStorage {

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    Counters.Counter private _itemsSold;

    address payable owner;

    uint256 listPrice = 0.01 ether;

    //The structure to store info about a listed game
    struct ListedGame {
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool currentlyListed;
    }

    //the event emitted when a game is successfully listed
    event TokenListedSuccess (
        uint256 indexed tokenId,
        address owner,
        address seller,
        uint256 price,
        bool currentlyListed
    );

    
    mapping(uint256 => ListedGame) private idToListedGame;

    constructor() ERC721("NFTMarketplace", "NFTM") {
        owner = payable(msg.sender);
    }

    function updateListPrice(uint256 _listPrice) public payable {
        require(owner == msg.sender, "Only owner can update listing price");
        listPrice = _listPrice;
    }

    function getListPrice() public view returns (uint256) {
        return listPrice;
    }

    function getLatestIdToListedGame() public view returns (ListedGame memory) {
        uint256 currentTokenId = _tokenIds.current();
        return idToListedGame[currentTokenId];
    }

    function getListedGameForId(uint256 tokenId) public view returns (ListedGame memory) {
        return idToListedGame[tokenId];
    }

    function getCurrentToken() public view returns (uint256) {
        return _tokenIds.current();
    }

    
    function createToken(string memory tokenURI, uint256 price) public payable returns (uint) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();

        _safeMint(msg.sender, newTokenId);

        _setTokenURI(newTokenId, tokenURI);

        createListedGame(newTokenId, price);

        return newTokenId;
    }

    function createListedGame(uint256 tokenId, uint256 price) private {
        require(msg.value == listPrice, "Hopefully sending the correct price");
        require(price > 0, "Make sure the price isn't negative");

        idToListedGame[tokenId] = ListedGame(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            true
        );

        _transfer(msg.sender, address(this), tokenId);
        emit TokenListedSuccess(
            tokenId,
            address(this),
            msg.sender,
            price,
            true
        );
    }
    
    function getAllNFTs() public view returns (ListedGame[] memory) {
        uint nftCount = _tokenIds.current();
        ListedGame[] memory tokens = new ListedGame[](nftCount);
        uint currentIndex = 0;

        for(uint i=0;i<nftCount;i++)
        {
            uint currentId = i + 1;
            ListedGame storage currentItem = idToListedGame[currentId];
            tokens[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return tokens;
    }
    
    function getMyNFTs() public view returns (ListedGame[] memory) {
        uint totalItemCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;
        
        for(uint i=0; i < totalItemCount; i++)
        {
            if(idToListedGame[i+1].owner == msg.sender || idToListedGame[i+1].seller == msg.sender){
                itemCount += 1;
            }
        }

        ListedGame[] memory items = new ListedGame[](itemCount);
        for(uint i=0; i < totalItemCount; i++) {
            if(idToListedGame[i+1].owner == msg.sender || idToListedGame[i+1].seller == msg.sender) {
                uint currentId = i+1;
                ListedGame storage currentItem = idToListedGame[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function executeSale(uint256 tokenId) public payable {
        uint price = idToListedGame[tokenId].price;
        address seller = idToListedGame[tokenId].seller;
        require(msg.value == price, "Please submit the asking price in order to complete the purchase");

        idToListedGame[tokenId].currentlyListed = true;
        idToListedGame[tokenId].seller = payable(msg.sender);
        _itemsSold.increment();

        
        _transfer(address(this), msg.sender, tokenId);
        
        approve(address(this), tokenId);

        
        payable(owner).transfer(listPrice);
        
        payable(seller).transfer(msg.value);
    }

    
}