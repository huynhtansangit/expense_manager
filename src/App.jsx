import { useState } from "react";
import ExpenseItem from "./Components/Expense/ExpenseItem";
import logo from "./logo.svg";
import "./App.scss";
import { DUMMY_EXPENSES } from "./Components/Expense/Expenses";
import Card from "./Components/Card/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/Expense/ExpenseFilter";

function App() {
  const [count, setCount] = useState(0);
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const changeExpenseFilterHandler = (yearSelected) => {
    console.log(yearSelected);
  };
  return (
    <div className="App">
      <NewExpense />
      <Card className="expenses">
        <ExpenseFilter onChangeExpenseFilter={changeExpenseFilterHandler} />
        {DUMMY_EXPENSES &&
          DUMMY_EXPENSES.length > 0 &&
          DUMMY_EXPENSES.map((expense) => {
            return <ExpenseItem key={expense.id} item={expense} />;
          })}
      </Card>
    </div>
  );
}

export default App;
