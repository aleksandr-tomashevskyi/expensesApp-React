import React, {useState} from 'react';

import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

   const [enteredFilterOption, setEnteredOption] = useState('2020');

  function applyFilterOption(option){
    console.log("This is the choosen option:", option)
    setEnteredOption(option);
  }

  return (
    <Card className="expenses">
    <ExpensesFilter onApplyFilterOption = {applyFilterOption} initialOption = {enteredFilterOption}/>
      <ExpenseItem
        title={props.propsData[0].title}
        amount={props.propsData[0].amount}
        date={props.propsData[0].date}
      />
      <ExpenseItem
        title={props.propsData[1].title}
        amount={props.propsData[1].amount}
        date={props.propsData[1].date}
      />
      <ExpenseItem
        title={props.propsData[2].title}
        amount={props.propsData[2].amount}
        date={props.propsData[2].date}
      />
      <ExpenseItem
        title={props.propsData[3].title}
        amount={props.propsData[3].amount}
        date={props.propsData[3].date}
      />
    </Card>
  );
}

export default Expenses;
