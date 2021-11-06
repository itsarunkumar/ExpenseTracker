import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses({ items }) {
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter/>
      <ExpenseItem
        date={items[0].date}
        title={items[0].title}
        amount={items[0].amount}
      />
      <ExpenseItem
        date={items[1].date}
        title={items[1].title}
        amount={items[1].amount}
      />
      <ExpenseItem
        date={items[2].date}
        title={items[2].title}
        amount={items[2].amount}
      />
      <ExpenseItem
        date={items[3].date}
        title={items[3].title}
        amount={items[3].amount}
      />
    </Card>
    </div>
  );
}

export default Expenses;
