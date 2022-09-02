import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'


function ExpensesList(props) {

   if(props.listData.length === 0){
      return <h2 className='expenses-list__fallback'>No expenses found</h2>
   };

  return (
    <ul className='expenses-list'>
      {props.listData.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </ul>
  );
}

export default ExpensesList;