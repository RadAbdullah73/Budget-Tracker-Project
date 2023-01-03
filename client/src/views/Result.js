import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const Result = (props) => {
    const [Budget, setBudget]=useState("")
    const [loaded,setLoaded]=useState(false)
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/Budget/' + props.id)

            .then(res => {
                setBudget(res.data);
                setLoaded(true)
               
                // console.log(res.data)

                

            },)
    }, []);
  return (
    <div>
      
        {loaded &&
      <>
       <h1>expenses</h1>
      <p>food:{Budget.expenses.food}</p>
      <p>residence:{Budget.expenses.residence}</p>
      <p>transport:{Budget.expenses.transport}</p>
      <p>clothes:{Budget.expenses.clothes}</p>
      <p>health:{Budget.expenses.health}</p>
      <p>entertainment:{Budget.expenses.entertainment}</p>
      <p>total expenses:{Budget.sum}</p>
      <h2>daily income:{Budget.dailyIncome}</h2>
      
   
      </>}
    </div>
  )
}

export default Result
