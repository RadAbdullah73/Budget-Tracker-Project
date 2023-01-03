import React,{useState,useEffect} from 'react'
import Table from '../component/Table'
import axios from 'axios'
import { Link } from '@reach/router'
import { format, formatDistance } from "date-fns";
import { Button } from '@material-ui/core';
import useLogout from '../hooks/useLogout'
import { navigate } from '@reach/router';
import TableG from '../component/TableG';


const List = (props) => {
    const [Budgets,setBudgets]=useState("")
    const [loaded,setLoaded]=useState("")
    const [month,setMonth]=useState("Jan")
    const [incomeTotalDaily,setIncomeTotalDaily]=useState(0)
    const[Totalexpenses , setTotalExpenses] = useState(0)
    var data = JSON.parse(sessionStorage.getItem('user'))

           
  const navToSuggest=()=>{
    navigate("/suggestion/" + data.user._id)
  }
  const navToProfile=()=>{
    navigate("/profile/" + data.user._id )
  }
  const navToAdd=()=>{
    navigate("/add")
  }
  const logOut=()=>{
    sessionStorage.removeItem('user');
    navigate("/")
  }
    
   
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

},[month]);
  //   const removeFromDom = personId => {
        
  //     setPlayers(players.filter(person => person._id != personId))
  // }
  return (
    <div>
      <button onClick={navToProfile}>Profile Page </button>
      <button onClick={navToSuggest}>Add Suggestion for Market </button>
      <br></br>
      <button onClick={navToAdd}>Add Your Expenses For Today </button>
      <br></br>
      <button onClick={logOut}>LogOut</button>

      {loaded &&
      
      <>
      <p>salary:{data.user.salary}</p>

      <p>total income for this month:{data.user.salary+incomeTotalDaily}</p>
      <button onClick={()=>setMonth("Jan")}>Jan</button>
      <button onClick={()=>setMonth("Feb")}>Feb</button>
      <button onClick={()=>setMonth("Mar")}>Mar</button>
      <button onClick={()=>setMonth("Apr")}>Apr</button>
      <button onClick={()=>setMonth("May")}>May</button>
      <button onClick={()=>setMonth("Jun")}>Jun</button>
      <button onClick={()=>setMonth("Jul")}>Jul</button>
      <button onClick={()=>setMonth("Aug")}>Aug</button>
      <button onClick={()=>setMonth("Sep")}>Sep</button>
      <button onClick={()=>setMonth("Oct")}>Oct</button>
      <button onClick={()=>setMonth("Nov")}>Nov</button>
      <button onClick={()=>setMonth("Dec")}>Dec</button>
     
      {Budgets.filter(p=>p.user[0]._id==data.user._id).map((item,i)=>{
        //  setIncomeTotalDaily(incomeTotalDaily+item.dailyIncome)
        return <div  key={i} style={{border:"1px solid black",display:"flex",justifyContent:"space-evenly"}}>
          <p>expenses:{item.sum}</p>
          <p>dailyIncome{item.dailyIncome}</p>
          <p>Date:{item.set1.slice(0,10)}</p>
          <Link to={"/Budget/"+item._id}><button>detail</button></Link>
          
        </div>

      })}
      </>
}
</div>
      
       
       
          

   

  )
}

export default List
