import { ethers } from "ethers";
import { useEffect, useState } from "react";
import InstagramDappABI from "../scdata/InstagramDapp.json";

const useInstagramContract = () => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const loadContract = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
    const signer = await provider.getSigner();
    const instagramContract = new ethers.Contract(contractAddress, InstagramDappABI.abi, signer);
    setContract(instagramContract);
    };
    loadContract();
  }, []);

  return contract;
};

export default useInstagramContract;
