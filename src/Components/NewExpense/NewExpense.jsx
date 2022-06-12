import Card from "../Card/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

const NewExpense = () => {
  const saveDataHandler=(enteredExpenseData)=>{
      const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
      }
      
  }
  return (
    <Card className="expenses new-expense">
      <ExpenseForm onSaveData={saveDataHandler}/>
    </Card>
  );
};

export default NewExpense;
