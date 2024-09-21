import { useState } from "react";
import useInstagramContract from "../hooks/useInstagramContract";
import axios from "axios";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const contract = useInstagramContract();

  const uploadToPinata = async (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: import.meta.env.VITE_PINATA_API_KEY,
          pinata_secret_api_key: import.meta.env.VITE_PINATA_API_SECRET,
        },
      });
      return res.data.IpfsHash;
    } catch (error) {
      console.error("Error uploading file to IPFS", error);
      return null;
    }
  };

  const createPost = async () => {
    if (!file) return alert("Please upload an image");
    const imageHash = await uploadToPinata(file);
    if (!imageHash) return;

    try {
      const tx = await contract.createPost(imageHash, description);
      await tx.wait();
      alert("Post created successfully");
    } catch (err) {
      console.error(err);
      alert("Error creating post");
    }
  };

  return (
    <div className="p-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Enter description"
        className="border p-2 mt-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={createPost} className="ml-2 p-2 bg-blue-500 text-white">
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
