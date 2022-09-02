import React, {useState} from 'react';

import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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
    <ExpensesList listData = {filteredExpensesArray}/>
    </Card>
  );
}

export default Expenses;
