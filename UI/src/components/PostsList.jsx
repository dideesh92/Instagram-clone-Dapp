import { useState, useEffect } from "react";
import useInstagramContract from "../hooks/useInstagramContract";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const contract = useInstagramContract();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await contract.getAllPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, [contract]);

  return (
    <div className="p-4">
      {posts.map((post, index) => (
        <div key={index} className="border p-4 mb-4">
          <img
            src={`https://gateway.pinata.cloud/ipfs/${post.imageHash}`}
            alt={post.description}
            className="w-full"
          />
          <p>{post.description}</p>
          <p>Posted by: {post.username}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
