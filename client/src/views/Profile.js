import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Create from '../component/Create'
import { Link, navigate } from '@reach/router';

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
            res.data.filter(p=>p.user[0]._id==data.user._id).map((item,i)=>{setIncomeTotalDaily(incomeTotalDaily+item.dailyIncome);
            setTotalExpenses(Totalexpenses+ item.sum)})
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
           
        </div>
    )
}

export default Profile