// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InstagramDapp {
    struct Post {
        string imageUrl;
        string caption;
        address author;
        uint timestamp;
    }

    mapping(address => bool) public registeredUsers;
    Post[] public posts;

    event UserRegistered(address user);
    event PostCreated(address author, string imageUrl, string caption, uint timestamp);

    // Register a new user
    function registerUser() external {
        require(!registeredUsers[msg.sender], "User already registered");
        registeredUsers[msg.sender] = true;
        emit UserRegistered(msg.sender);
    }

    // Check if the user is registered
    function isUserRegistered(address user) external view returns (bool) {
        return registeredUsers[user];
    }

    // Add a new post
    function addPost(string memory _imageUrl, string memory _caption) external {
        require(registeredUsers[msg.sender], "Only registered users can post");
        posts.push(Post(_imageUrl, _caption, msg.sender, block.timestamp));
        emit PostCreated(msg.sender, _imageUrl, _caption, block.timestamp);
    }

    // Retrieve all posts
    function getPosts() external view returns (Post[] memory) {
        return posts;
    }
}
