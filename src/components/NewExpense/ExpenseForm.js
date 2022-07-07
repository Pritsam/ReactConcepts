import React,{useState} from "react"
import "./ExpenseForm.css"

const ExpenseForm=(props)=>{

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleChangeHandler= (event) => {
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
    }

    const onCancel=()=>{
        props.onCancel()
    }
    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
        }
        

        //console.log(title,amount,date);
        props.onSaveExpenseData(expenseData)
        setTitle('');
        setAmount('');
        setDate('');

    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm