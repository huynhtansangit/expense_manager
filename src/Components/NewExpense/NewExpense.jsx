import Card from "../Card/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = (props) => {
  const saveDataHandler=(enteredExpenseData)=>{
      const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
      }
      props.onAddExpense(expenseData)
  }
  return (
    <Card className="expenses new-expense">
      <ExpenseForm onSaveData={saveDataHandler}/>
    </Card>
  );
};

export default NewExpense;
