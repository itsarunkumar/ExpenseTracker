import React ,{useState} from 'react';
import './newExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

  const [isEditing , setIsEditing ]=useState(false)


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.addExpen(expenseData);
    setIsEditing(false)
  };

  const startEditingHandler = ()=>{
    setIsEditing(true)
  }

  const stopEditing=()=>{
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />}
    </div>
  );
};

export default NewExpense;
