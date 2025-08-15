# CalculatorDApp

A simple decentralized application (**DApp**) that performs basic arithmetic operations using a **Solidity smart contract** deployed on a local Ethereum blockchain via **Ganache**, and interacted with through a **MetaMask-connected HTML/JavaScript frontend**.

---

## 🚀 Features
- Perform addition ➕, subtraction ➖, multiplication ✖, and division ➗ on the blockchain.
- Stores the last computed result on-chain.
- Simple web interface with MetaMask integration.
- Runs on a local Ethereum test network (Ganache).

---

## 🛠 Technologies Used
- **Solidity** – Smart contract language
- **Node.js** – Backend setup and local server
- **Ganache** – Local Ethereum blockchain
- **MetaMask** – Wallet & blockchain connection
- **Web3.js** – Blockchain interaction from JavaScript
- **HTML / CSS / JavaScript** – Frontend

---

### 1️⃣ Prerequisites
Ensure the following are installed on your system:
- [Node.js & npm](https://nodejs.org/)
- [Ganache](https://trufflesuite.com/ganache/)
- [MetaMask](https://metamask.io/) browser extension (Chrome or Firefox)

---

### 2️⃣ Clone the Repository
```bash
git clone git@github.com:Eman0879/CalculatorDApp.git
cd CalculatorDApp
```

### 3️⃣ Initialize Node.js Project
```bash
npm init -y
```
### 4️⃣ Add Start Script

Edit package.json and replace the scripts section with:
``` bash

"scripts": {
  "start": "npx serve ."
}
```
### 5️⃣ Start Ganache

- Open Ganache and create a New Workspace.
- Note the RPC Server address (e.g., http://127.0.0.1:7545).

### 6️⃣ Connect MetaMask to Ganache

- Open MetaMask.
- Go to Networks → **Add Network** → **Add a network manually**.
- Fill in:
   - Network Name: Ganache
   - RPC URL: Your Ganache RPC URL (e.g., http://127.0.0.1:7545)
   - Chain ID: 1337 (or Ganache’s displayed Chain ID)
   - Currency Symbol: ETH
   - Import one of the Ganache private keys into MetaMask.

### 7️⃣ Copy the Smart Contract

- Paste the Calculator.sol file.

### 8️⃣ Deploy the Smart Contract

- Open Remix IDE.
- Create a new file Calculator.sol and paste the above code.
- Compile using 0.8.x compiler version.
- Go to Deploy & Run Transactions.
- Select Injected Provider - MetaMask and connect to your Ganache account.
- Deploy the contract.
- Copy:
   - Deployed contract address
   - Contract ABI (from Remix after compilation)

### 9️⃣ Configure the Frontend

- Create index.html in your project folder and add your UI & JavaScript.
- Replace:
  - const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
  - const abi = [ /* Paste full ABI from Remix */ ]; with your actual contract address and ABI.

### 🔟 Run the DApp
```bash 
npm start
```
- This will start a local server.
- Open the provided URL (e.g., http://localhost:3000) in your browser with MetaMask installed.

