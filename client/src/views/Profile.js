import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Create from '../component/Create'
import { Link, navigate } from '@reach/router';
import Chart from './Chart'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Profile = (props) => {
    const [thisUser, setThisUser]=useState("")
    const [loaded,setLoaded]=useState(false)
    const [errors, setErrors] = useState([]); 
    const[month,setMonth]=useState("Jan")
    const[Budgets , setBudgets] = useState([])
    const[incomeTotalDaily , setIncomeTotalDaily] = useState(0)
    const[Totalexpenses , setTotalExpenses] = useState(0)

    
    var data = JSON.parse(sessionStorage.getItem('user'))

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' + props.id)

            .then(res => {
              setThisUser(res.data);
                setLoaded(true)
              
            },)
    }, []);
    useEffect(()=>{
      axios.get('http://localhost:8000/api/Budget/month/'+month)
      .then(res=>{
        var totalEx=0
        var totalIn=0
        res.data.filter(p=>p.user[0]._id==data.user._id).map((item,i)=>{

          // setIncomeTotalDaily(parseInt(incomeTotalDaily)+parseInt(item.dailyIncome))
          totalEx+=item.sum
        // setTotalExpenses(Totalexpenses+ item.sum)}
        totalIn+=item.dailyIncome}
        )
        setIncomeTotalDaily(totalIn)
        setTotalExpenses(totalEx)
          setBudgets(res.data);
          setLoaded(true);
          console.log(data.user.salary)

      })
      .catch(err => console.error(err));

  },[]);
  const homePage=()=>{
    navigate("/home")
}

    return (
        <div>
          <button onClick={homePage}>Home Page </button>
            {loaded &&
            <>
            <p>UserName : {thisUser.firstName} {thisUser.lastName}</p>
            <p>Email : {thisUser.email}</p>
            <p>Salary : {thisUser.salary}</p>
            <p>Total Expenses : 
           
      <div style={{border:"1px solid black",display:"flex",justifyContent:"space-evenly"}}>
          <p>All Expenses for this Month:{Totalexpenses}</p>
          <p>All Incomes:{incomeTotalDaily}</p>
  
        </div>
    

            </p>

          
            </>
}
<div style={{display:'flex' , justifyContent:'space-evenly'}}>
<Chart userId ={data.user._id}></Chart>
<Stack direction="column" spacing={2}>
      <Button variant="contained">
        Food
      </Button>
      <Button variant="contained" color="success">
      Residence
      </Button>
      <Button variant="contained" color="error">
        Transport
      </Button>
      <Button variant="contained" color="error">
      Clothes
      </Button>
      <Button variant="contained" color="error">
      Health
      </Button>
      <Button variant="contained" color="error">
      Entertainment
      </Button>
      <Button variant="contained" color="error">
      Maintenance
      </Button>
      <Button variant="contained" color="error">
      Others
      </Button>

    </Stack>
    </div>
       
        </div>
    )
}

export default Profile