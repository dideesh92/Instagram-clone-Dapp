import React, { useState } from 'react';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <MainContent />
    </div>
  );
}

function MainContent() {
  const [posts, setPosts] = useState([
    {
      username: "my_hard_feelingss",
      imageUrl: "https://via.placeholder.com/500", 
      caption: "👌",
      comments: ["This is a great post!", "Loving the vibes here."],
      likes: 6288,
      timeAgo: "3h"
    }
  ]);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');

  const statuses = [
    { username: "user1", profileImage: "https://via.placeholder.com/50" },
    { username: "user2", profileImage: "https://via.placeholder.com/50" },
    { username: "user3", profileImage: "https://via.placeholder.com/50" },
    { username: "user4", profileImage: "https://via.placeholder.com/50" },
  ];

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = () => {
    const newPost = {
      username: "new_user",
      imageUrl: URL.createObjectURL(file),
      caption: caption,
      comments: [],
      likes: 0,
      timeAgo: "Just now"
    };
    setPosts([newPost, ...posts]);
    setFile(null);
    setCaption(''); 
  };

  const removePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px,1fr] min-h-screen">
      <div className="bg-white p-4 shadow-md min-h-screen">
        <h1 className="text-xl font-bold mb-4">Instagram Dapp</h1>
        <nav className="space-y-4">
          <button className="block w-full text-left p-2 rounded hover:bg-gray-100">Home</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-100">Search</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-100">Explore</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-100">Reels</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-100">Messages</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-100">Notifications</button>
          <button className="block w-full text-left p-2 rounded hover:bg-gray-100">Profile</button>
          <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="cursor-pointer block text-center bg-blue-500 text-white p-2 rounded mt-4">
            Upload
          </label>
          {file && (
            <>
              <input 
                type="text" 
                placeholder="Add a caption..." 
                className="border p-2 w-full mt-2" 
                value={caption} 
                onChange={e => setCaption(e.target.value)} 
              />
              <button 
                onClick={uploadFile} 
                className="bg-green-500 text-white p-2 w-full rounded mt-2">
                Post
              </button>
            </>
          )}
        </nav>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex space-x-4 overflow-x-auto mb-6">
          {statuses.map((status, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={status.profileImage}
                alt={`${status.username}'s status`}
                className="h-16 w-16 rounded-full border-2 border-red-500"
              />
              <p className="text-xs mt-2">{status.username}</p>
            </div>
          ))}
        </div>

        {posts.map((post, index) => (
          <div key={index} className="max-w-xl mx-auto bg-white p-4 shadow-lg mt-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img className="rounded-full h-10 w-10 mr-3" src="https://via.placeholder.com/40" alt="profile" />
                <p className="font-bold">{post.username}</p>
              </div>
              <button onClick={() => removePost(index)} className="text-red-500">Remove</button>
            </div>
            <img className="w-full rounded-lg mb-4" src={post.imageUrl} alt="post" />
            <div className="mb-4">
              <button className="mr-2">❤️</button>
              <button className="mr-2">💬</button>
              <button>🔗</button>
            </div>
            <div>
              <p><span className="font-bold">{post.likes} likes</span></p>
              <p>{post.caption}</p>
              <p className="text-gray-600 text-sm">{post.timeAgo}</p>
              <div className="mt-4">
                {post.comments.map((comment, idx) => (
                  <p key={idx} className="text-sm">{comment}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
