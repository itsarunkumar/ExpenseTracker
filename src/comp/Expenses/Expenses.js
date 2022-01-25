import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
function Expenses({ items }) {
  const [filterdText, setFilteredText] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    console.log(`---in Expenses js file ${selectedYear}`);
    setFilteredText(selectedYear);
  };

  const filteredExpense = items.filter(
    (expense) => expense.date.getFullYear().toString() === filterdText
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterd={filterdText} onFilter={filterChangeHandler} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
