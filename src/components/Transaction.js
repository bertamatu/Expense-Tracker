import React from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}:{" "}
      <span>
        {sign}
        {Math.abs(transaction.amount)} Eur
      </span>{" "}
      <button>x</button>
    </li>
  );
};

//TODO create 2 css classes for minus and plus for <li></li>
// green/red border on the right of the amount number
