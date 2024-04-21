import { useState } from "react";
import server from "./server";

function Transactions({
  transactions
}) {
  return (
    <div className="transactions">
        {transactions?.map(transaction => {
            {console.log({transaction})}
            return(    
                <div key={transaction.index} className="block">
                    <div>Transaction No: {transaction.index}</div>
                    <div>Time: {transaction.time}</div>
                    <div>Amount: {transaction.amount}</div>
                    <div>Sender: {transaction.sender}</div>
                    <div>Recipient: {transaction.recipient}</div>
                </div>
            )
        })}
    </div>
  );
}

export default Transactions;
