import { useState } from "react";
import ExpenseItem from "./Components/Expense/ExpenseItem";
import logo from "./logo.svg";
import "./App.scss";
import { DUMMY_EXPENSES } from "./Components/Expense/Expenses";
import Card from "./Components/Card/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import ExpenseFilter from "./Components/Expense/ExpenseFilter";
import ExpenseList from "./Components/Expense/ExpenseList";

function App() {
  const [count, setCount] = useState(0);
  const [filteredExpenses, setFilteredExpenses] = useState(DUMMY_EXPENSES);

  const changeExpenseFilterHandler = (yearSelected) => {
    console.log(yearSelected);
    const expensesFilteredByYear=DUMMY_EXPENSES.filter(expense => expense.date.getFullYear().toString()===yearSelected)
    setFilteredExpenses(prevExpense=>[...expensesFilteredByYear])
  };
  const addExpenseHandler = (expense) => {
    setFilteredExpenses((prevExpense) => [expense, ...prevExpense]);
    console.log(expense);
  };

  
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">
        <ExpenseFilter onChangeExpenseFilter={changeExpenseFilterHandler} />
        <ExpenseList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default App;
