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
    
    var data = JSON.parse(sessionStorage.getItem('user'))

           

    
   
    useEffect(()=>{
        axios.get('http://localhost:8000/api/Budget/month/'+month)
            .then(res=>{
              res.data.filter(p=>p.user[0]._id==data.user._id).map((item,i)=>setIncomeTotalDaily(incomeTotalDaily+item.dailyIncome))
                setBudgets(res.data);
                setLoaded(true);
                console.log(data.user.salary)
                
            })
            .catch(err => console.error(err));
      
    },[]);
  //   const removeFromDom = personId => {
        
  //     setPlayers(players.filter(person => person._id != personId))
  // }
  return (
    <div   >
      
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
          <p>expenses:{item.expenses.sum}</p>
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
