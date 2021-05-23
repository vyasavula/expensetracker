import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseItem";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Title changed.");
  };
  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </div>
      <button onClick={clickHandler}>Click me.</button>
    </div>
  );
};

export default ExpenseItem;
