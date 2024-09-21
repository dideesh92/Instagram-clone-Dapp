import { useState } from "react";
import useInstagramContract from "../hooks/useInstagramContract";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const contract = useInstagramContract();

  const registerUser = async () => {
    try {
      console.log("1")
      const tx = await contract.registerUser(username);
      await tx.wait();
      console.log("2")
      alert("User registered successfully");
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter username"
        className="border p-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={registerUser} className="ml-2 p-2 bg-blue-500 text-white">
        Create Account
      </button>
    </div>
  );
};

export default CreateAccount;
