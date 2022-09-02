import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){

   const [formVisibility, setFormVisibility] = useState(false);

   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');

   function formVisibilityHandler(){
      setFormVisibility(!formVisibility);
   }

   function titleChangeHandler(event){
      setEnteredTitle(event.target.value);
   }

   function amountChangeHandler(event){
      setEnteredAmount(event.target.value);
   }

   function dateChangeHandler(event){
      setEnteredDate(event.target.value);
   }

   function submitHandler(event){
      event.preventDefault();

      const expenseData = {
         title: enteredTitle,
         amount: enteredAmount,
         date: new Date(enteredDate)
      };

      props.onSaveExpenseData(expenseData);

      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      formVisibilityHandler();
   }

   if(!formVisibility){
      return (
      <button onClick={formVisibilityHandler} type="cancel">Add New Expense</button>
      )
   }

   return (
      <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
         <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
         </div>
         <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
         </div>
         <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" value={enteredDate} min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
         </div>
      </div>
      <div className='new-expense__actions'>
         <button onClick={formVisibilityHandler} type="cancel">Cancel</button>
         <button type="submit">Add Expense</button>
      </div>
      </form>
   )
}

export default ExpenseForm;