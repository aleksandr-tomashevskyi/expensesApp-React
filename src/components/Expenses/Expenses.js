import React, {useState} from 'react';

import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

   const [enteredFilterOption, setEnteredOption] = useState('2020');

  function applyFilterOption(option){
    console.log("This is the chosen option:", option)
    setEnteredOption(option);
  }

  const filteredExpensesArray = props.propsData.filter(item => item.date.getFullYear().toString() === enteredFilterOption);

  return (
    <Card className="expenses">
    <ExpensesFilter onApplyFilterOption = {applyFilterOption} initialOption = {enteredFilterOption}/>
    {filteredExpensesArray.length === 0 && <p>No expenses found</p>}
    {filteredExpensesArray.length > 0 && filteredExpensesArray.map((item)=>(
    <ExpenseItem
    key={item.id}
    title={item.title}
    amount={item.amount}
    date={item.date}
  />
  ))}
    </Card>
  );
}

export default Expenses;
