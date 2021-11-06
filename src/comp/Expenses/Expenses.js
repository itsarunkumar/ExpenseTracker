import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';

function Expenses({ items }) {
  const [filterdText, setFilteredText] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    console.log(`---in Expenses js file ${selectedYear}`);
    setFilteredText(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterd={filterdText} onFilter={filterChangeHandler} />
        {items.map((expense) => (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
