import "./ExpenseForm.scss";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })
  const titleChangeHandler = (event) => {
    const title = event.target.value;
    setEnteredTitle(title);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:title
    // });
    // Use the way below to update new state instead of piece of code above or separate all state from object
    // *setUserInput(prevState=>{
    // *  return {...prevState,enteredTitle:event.target.value}
    // *})
  };
  const amountChangeHandler = (event) => {
    const amount = event.target.value;
    setEnteredAmount(amount);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:amount
    // })
  };
  const dateChangeHandler = (event) => {
    const date = event.target.value;
    setEnteredDate(date);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:date
    // })
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData ={
      title:enteredTitle,
      amount:enteredAmount,
      date:new Date(enteredDate)
    }
    props.onSaveData(expenseData)
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="new-expense__input"
            type={"text"}
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            className="new-expense__input"
            type="number"
            min={500}
            step={500}
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            className="new-expense__input"
            type="date"
            min={"2019-01-01"}
            max={"2022-12-31"}
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button className="new-expense__action--submit" type="submit">
          Add expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
