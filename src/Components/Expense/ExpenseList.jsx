import "./ExpenseList.scss";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.filteredExpenses && props.filteredExpenses.length > 0) {
    return (
      <ul className="expenses-list">
        {props.filteredExpenses.map((expense) => {
          return <ExpenseItem key={expense.id} item={expense} />;
        })}
      </ul>
    );
  }
  else {
      return <h2 className="expenses-list__fallback">Found no expenses</h2>
  }
};

export default ExpenseList;
