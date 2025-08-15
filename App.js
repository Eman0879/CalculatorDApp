import React, { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

// ✅ Replace with your deployed contract address from Remix
const contractAddress = "0x19a0cbc72774cbb1615d0de6dc1b997d85b42482";

// ✅ Your smart contract ABI
const abi = [
  {
		"inputs": [
			{
				"internalType": "int256",
				"name": "a",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "b",
				"type": "int256"
			}
		],
		"name": "add",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "a",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "b",
				"type": "int256"
			}
		],
		"name": "divide",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "a",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "b",
				"type": "int256"
			}
		],
		"name": "multiply",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "a",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "b",
				"type": "int256"
			}
		],
		"name": "subtract",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "result",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);

  const connectContract = async () => {
    if (!window.ethereum) return alert("MetaMask is not installed!");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(contractAddress, abi, signer);
  };

  const callFunction = async (methodName) => {
    try {
      const contract = await connectContract();
      const tx = await contract[methodName](parseInt(a), parseInt(b));
      await tx.wait(); // wait for transaction to confirm
      const res = await contract.result();
      setResult(res.toString());
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Check the console for details.");
    }
  };

  return (
    <div className="App">
      <h1>🧮 Blockchain Calculator</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Enter second number"
      />
      <br /><br />
      <button onClick={() => callFunction("add")}>Add ➕</button>
      <button onClick={() => callFunction("subtract")}>Subtract ➖</button>
      <button onClick={() => callFunction("multiply")}>Multiply ✖️</button>
      <button onClick={() => callFunction("divide")}>Divide ➗</button>
      <br /><br />
      {result !== null && <h2>✅ Result: {result}</h2>}
    </div>
  );
}

export default App;
