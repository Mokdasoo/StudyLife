import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    const [viewForm, setViewForm] = useState(false);
    const switchForm = () => {
        viewForm ? setViewForm(false) : setViewForm(true);
    }
    
    let formContent = <button type="button" onClick={switchForm}>Add New Expense</button>
    if(viewForm){
        formContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} switchForm={switchForm}/>;
    }

    return(
        <div className="new-expense">
            {formContent}
        </div>
    );
}
export default NewExpense;