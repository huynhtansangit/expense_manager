import Card from "../Card/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";
import { useState } from "react";
const NewExpense = (props) => {
  const saveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isShowingExpenseForm, setIsShowingExpenseForm] = useState(false);
  const showNewExpenseHandler = () => {
    setIsShowingExpenseForm(!isShowingExpenseForm);
  };
  let newExpenseContent = <></>;
  if (isShowingExpenseForm) {
    newExpenseContent = (
      <ExpenseForm
        onSaveData={saveDataHandler}
        onShowNewExpense={showNewExpenseHandler}
      />
    );
  } else {
    newExpenseContent = (
      <div className="new-expense__action">
        <button
          className="new-expense__action--button"
          onClick={showNewExpenseHandler}
        >
          Add New Expense
        </button>
      </div>
    );
  }
  return (
    <>
      <Card className="expenses new-expense">{newExpenseContent}</Card>
    </>
  );
};

export default NewExpense;
