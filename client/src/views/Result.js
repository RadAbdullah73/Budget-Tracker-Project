import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Create from '../component/Create';
import { navigate } from '@reach/router';


const Result = (props) => {
    const [Budget, setBudget]=useState("")
    const [loaded,setLoaded]=useState(false)
    const [errors, setErrors] = useState([]);
    const [dailyIncome,setDailyIncome]=useState(0)
    const [expenses,setExpenses]=useState(0)
    const [debts,setDebts]=useState(0)
    const [select , setSelect] = useState(0)
    const [food,setFood]=useState(0)
    const [residence,setResidence]=useState(0)
    const [transport,setTransport]=useState(0)
    const [clothes,setClothes]=useState(0)
    const [health,setHealth]=useState(0)
    const [entertainment,setEntertainment]=useState(0)
    const [maintenance,setMaintenance]=useState(0)
    const [other,setOther]=useState(0)
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/Budget/' + props.id)

            .then(res => {
                setBudget(res.data);
                setLoaded(true)
               
                // console.log(res.data)

                

            },)
    }, []);
    
    const updateBudget =() => {
      var sum=0 
      sum = parseInt(Budget.sum)+ parseInt(food) + parseInt(residence) + parseInt(transport) + parseInt(clothes) + parseInt(health) + parseInt(entertainment) + parseInt(maintenance) + parseInt(other)
      axios.put('http://localhost:8000/api/Budget/update/' + props.id,{'dailyIncome': parseInt(dailyIncome)+ parseInt(Budget.dailyIncome) , 'expenses.food': parseInt(food)+parseInt(Budget.expenses.food)   , 'expenses.residence' : parseInt(residence)+parseInt(Budget.expenses.residence) , 'expenses.transport' :parseInt(transport) +  parseInt(Budget.expenses.transport) , 'expenses.clothes' : parseInt(clothes) + parseInt(Budget.expenses.clothes) , 'expenses.health' :parseInt(health)+parseInt(Budget.expenses.health) , 'expenses.entertainment' : parseInt(entertainment)+parseInt(Budget.expenses.entertainment) ,  'expenses.maintenance' : parseInt(maintenance)+parseInt(Budget.expenses.maintenance) , 'expenses.other' : parseInt(other) + parseInt(Budget.expenses.other) , 'sum':sum})
      .then(res =>navigate("/home"))
          .catch(err => {
              const errorResponse = err.response.data.errors; // Get the errors from err.response.data
              const errorArr = []; // Define a temp error array to push the messages in
              for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message)
              }
              
              setErrors(errorArr);
              console.log(errorArr);
          })


  }
  return (
    <div>
      
        {loaded &&
      <>
       <h1>expenses for : {Budget.set1.slice(0,10)}</h1>
       <h2>daily income:{Budget.dailyIncome}</h2>
      <p>food:{Budget.expenses.food}</p>
      <p>residence:{Budget.expenses.residence}</p>
      <p>transport:{Budget.expenses.transport}</p>
      <p>clothes:{Budget.expenses.clothes}</p>
      <p>health:{Budget.expenses.health}</p>
      <p>entertainment:{Budget.expenses.entertainment}</p>
      <p>Maintenance : {Budget.expenses.maintenance}</p>
      <p>Other Expenses : {Budget.expenses.other}</p>
      <p>total expenses:{Budget.sum}</p>
      
      {errors.map((err, index) => <p key={index}>{err}</p>)}
     
      <div>
      <div>
            <h3>Daily Income:</h3>
            <input type="number" onChange={(e)=>setDailyIncome(e.target.value)}></input>
        </div>
                 <p>Food : <input type="number"  onChange={(e)=>setFood(e.target.value)}></input></p>
                 <p>Residence : <input type="number" onChange={(e)=>setResidence(e.target.value)}></input></p>
                 <p>Transport : <input type="number"  onChange={(e)=>setTransport(e.target.value)}></input></p>
                 <p>Clothes : <input type="number"  onChange={(e)=>setClothes(e.target.value)}></input></p>
                 <p>Health : <input type="number"  onChange={(e)=>setHealth(e.target.value)}></input></p>
                 <p> Entertainment : <input type="number"  onChange={(e)=>setEntertainment(e.target.value)}></input></p>
                 <p> Maintenance :<input type="number"  onChange={(e)=>setMaintenance(e.target.value)}></input></p>
                 <p> Others : <input type="number"  onChange={(e)=>setOther(e.target.value)}></input></p>
                
             </div>  
             <button style={{backgroundColor:"blue"}} onClick={updateBudget}>Add </button>
            
      
   
      </>}

    </div>
  )
}

export default Result
