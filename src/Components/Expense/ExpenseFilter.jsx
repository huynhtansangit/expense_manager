import './ExpenseFilter.scss'
const ExpenseFilter=(props)=>{
    const [filteredYear, setFilteredYear] = useState('2022');  
    const changeHandler =(event)=>{
        const year= event.target.value;
        props.onChangeExpenseFilter(year);
    }
    return (
        <div className="expense-filter">
            <div className="expense-filter__control">
             <label>Filter by year</label>
                <select value={props.selected} onChange={changeHandler}>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
            </div>      
        </div>
    )
}
export default ExpenseFilter;