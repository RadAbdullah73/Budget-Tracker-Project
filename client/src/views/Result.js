import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Create from '../component/Create';
import { navigate } from '@reach/router';
import {TextField } from '@material-ui/core';
import Grid from "@mui/material/Grid";



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
       <h2 className='rooo' style={{marginTop:'10px'}} >Expenses for : {Budget.set1.slice(0,10)}</h2>


       <table className="table table-striped">
            <thead>
        <tr className="bg-info">
        <th style={{textAlign:'center'}}>Daily Income</th>
        <th style={{textAlign:'center'}}>food</th>
        <th style={{textAlign:'center'}}>residence</th>
        <th style={{textAlign:'center'}}>transport</th>
        <th style={{textAlign:'center'}}>clothes</th>
        <th style={{textAlign:'center'}}>health</th>
        <th style={{textAlign:'center'}}>entertainment</th>
        <th style={{textAlign:'center'}}>Maintenance</th>
        <th style={{textAlign:'center'}}>Other Expenses</th>
        <th style={{textAlign:'center'}}>total expenses</th>
        </tr>
        </thead>

       <tr className="bg-light">
       <td style={{textAlign:'center'}}>{Budget.dailyIncome}</td>
       <td style={{textAlign:'center'}}>{Budget.expenses.residence}</td>
       <td style={{textAlign:'center'}}>{Budget.expenses.food} </td>
       <td style={{textAlign:'center'}}>{Budget.expenses.transport}</td>
       <td style={{textAlign:'center'}}>{Budget.expenses.clothes} </td>
       <td style={{textAlign:'center'}}>{Budget.expenses.health}</td>
       <td style={{textAlign:'center'}}>{Budget.expenses.entertainment}</td>
       <td style={{textAlign:'center'}}>{Budget.expenses.maintenance}</td>
       <td style={{textAlign:'center'}}>{Budget.expenses.other} </td>
       <td style={{textAlign:'center'}}>{Budget.sum}</td>

       </tr>
</table>


      
      {errors.map((err, index) => <p key={index}>{err}</p>)}
     
      <div>
      <div>
          <br></br>
          <h3 className='headingDaily'>Daily Income</h3>
          <TextField style={{ marginLeft: '520px' }} inputProps={{ style: { fontSize: 25 } }}  helperText="DailyIncome" type="text" value={dailyIncome} onChange={(e) => setDailyIncome(e.target.value)} />
        </div>
        <div style={{ margin: "0 0 0 40%", width: "20%", display: "flex" }}>
            <Grid>
              <TextField inputProps={{ style: { fontSize: 25 } }}  helperText="Food" type="text" value={food} onChange={(e) => setFood(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Residence" type="text" value={residence} onChange={(e) => setResidence(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Transport" type="text" value={transport} onChange={(e) => setTransport(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Clothes" type="text" value={clothes} onChange={(e) => setClothes(e.target.value)} />
            </Grid>
            <div style={{ width: "40%" }}>
            </div>
            <div>
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Health" type="text" value={health} onChange={(e) => setHealth(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Entertainment" type="text" value={entertainment} onChange={(e) => setEntertainment(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Maintenance" type="text" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Others" type="text" value={other} onChange={(e) => setOther(e.target.value)} />
            </div>
          </div>
                
             </div>  
             <button className='BtnAdd' onClick={updateBudget}>Add To your Current Expenses </button>
            
      
   
      </>}

    </div>
  )
}

export default Result
