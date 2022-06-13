import Card from "../Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.scss";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.item.title);
  const [date, setDate] = useState(props.item.date);
  const [amount, setAmount] = useState(props.item.amount);
  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__desc">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount} VND</div>
      </div>
      <button type="button" onClick={clickHandler}>
        Click Me!
      </button>
    </Card>
  );
};
export default ExpenseItem;
