import React from 'react';
import './ExpenseDate.css';
function ExpenseDate({ date }) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {new Intl.DateTimeFormat('en-US', {
          month: 'long',
        }).format(date)}
      </div>
      <div className="expense-date__year">
        {new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
        }).format(date)}
      </div>
      <div className="expense-date__day">
        {new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
        }).format(date)}
      </div>
    </div>
  );
}

export default ExpenseDate;
