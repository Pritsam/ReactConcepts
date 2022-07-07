import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem"

const ExpensesList = (props)=>{

if(props.items.length===0){
    return(
        <h2 className="expenses-list__fallback">Found no expenses!</h2>
    )
}

    return(
        

    props.items.map((expenses)=>(
      <ExpenseItem className="expenses-list"
        key={expenses.id} 
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    ))

    )

}

export default ExpensesList;