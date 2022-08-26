import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  console.log(props.propsData[0]);
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
