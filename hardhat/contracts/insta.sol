// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract InstagramDapp {
    struct Post {
        string imageHash;
        string description;
        uint256 timestamp;
        string username;
        address userAddress;
    }

    mapping(address => bool) public isUserRegistered;
    mapping(address => string) public usernames;
    mapping(address => Post[]) public userPosts;
    Post[] public allPosts;

    event UserRegistered(address indexed user, string username);
    event PostCreated(address indexed user, string imageHash, string description, uint256 timestamp);

    function registerUser(string memory _username) public {
        require(!isUserRegistered[msg.sender], "User already registered");
        usernames[msg.sender] = _username;
        isUserRegistered[msg.sender] = true;

        emit UserRegistered(msg.sender, _username);
    }

    function createPost(string memory _imageHash, string memory _description) public {
        require(isUserRegistered[msg.sender], "Only registered users can create posts");

        Post memory newPost = Post({
            imageHash: _imageHash,
            description: _description,
            timestamp: block.timestamp,
            username: usernames[msg.sender],
            userAddress: msg.sender
        });

        userPosts[msg.sender].push(newPost);
        allPosts.push(newPost);

        emit PostCreated(msg.sender, _imageHash, _description, block.timestamp);
    }

    function getUserPosts(address _user) public view returns (Post[] memory) {
        return userPosts[_user];
    }

    function getAllPosts() public view returns (Post[] memory) {
        return allPosts;
    }
}
