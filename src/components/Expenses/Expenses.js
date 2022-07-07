import React,{useState} from "react";
//import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css"
import Card from "../UI/Card";

function Expenses(props){
  
  const[selectedYear, setYear]=useState('2020')

  const filterByYearHandler=(year)=>{
    setYear(year)
  }

  const filteredExpenses=props.items.filter((expenses)=> (expenses.date.getFullYear().toString()===selectedYear));

  


  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onFilterByYear={filterByYearHandler}/>
      <ExpensesList items={filteredExpenses}/>

    </Card>
  );

}

export default Expenses