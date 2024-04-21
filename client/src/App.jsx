import Wallet from "./Wallet";
import Transfer from "./Transfer";
import Transactions from "./Transactions";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <div className="app">
        <Wallet
          balance={balance}
          setBalance={setBalance}
          address={address}
          setAddress={setAddress}
          privateKey={privateKey}
          setPrivateKey={setPrivateKey}
        />
        <Transfer
          setBalance={setBalance}
          address={address}
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
      <div>
        {transactions.length > 0 ? <Transactions transactions={transactions} />:''}
       </div>
    </>
  );
}

export default App;
