
import React ,{useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Create = (props) => {
    const [dailyIncome,setDailyIncome]=useState(props.initialDailyIncome)
    const [expenses,setExpenses]=useState(props.initialExpenses)
    const [debts,setDebts]=useState(props.initialDepts)
    const [select , setSelect] = useState(props.initialSelect)
    const [food,setFood]=useState(0)
    const [residence,setResidence]=useState(0)
    const [transport,setTransport]=useState(0)
    const [clothes,setClothes]=useState(0)
    const [health,setHealth]=useState(0)
    const [entertainment,setEntertainment]=useState(0)
    const [maintenance,setMaintenance]=useState(0)
    const [other,setOther]=useState(0)


    var data = JSON.parse(sessionStorage.getItem('user'))


    const handleSubmet=(e)=>{
        e.preventDefault();
        props.onSubmitProp(dailyIncome , debts , expenses , food , residence , transport , clothes , health , entertainment , maintenance , other );

    }
    
  return (
    <div>
      <h1>Add your Finance for Today </h1>
      <form onSubmit={handleSubmet}>
        <div>
            <h3>Daily Income:</h3>
            <input type="text" value={dailyIncome} onChange={(e)=>setDailyIncome(e.target.value)}></input>
        </div>
        <div>
          <br></br>
            <h3>Expenses</h3>
            <p>Food : <input type="text" value={food} onChange={(e)=>setFood(e.target.value)}></input></p>
            <p>Residence : <input type="text" value={residence} onChange={(e)=>setResidence(e.target.value)}></input></p>
            <p>Transport : <input type="text" value={transport} onChange={(e)=>setTransport(e.target.value)}></input></p>
            <p>Clothes : <input type="text" value={clothes} onChange={(e)=>setClothes(e.target.value)}></input></p>
            <p>Health : <input type="text" value={health} onChange={(e)=>setHealth(e.target.value)}></input></p>
            <p> Entertainment : <input type="text" value={entertainment} onChange={(e)=>setEntertainment(e.target.value)}></input></p>
            <p> Maintenance :<input type="text" value={maintenance} onChange={(e)=>setMaintenance(e.target.value)}></input></p>
            <p> Others : <input type="text" value={other} onChange={(e)=>setOther(e.target.value)}></input></p>
        </div>
        <div>
            <h3>Debts </h3>
            <input type="text" value={debts} onChange={(e)=>setDebts(e.target.value)}></input>
        </div>   
        <button style={{backgroundColor:"blue"}}>Add </button>
       
      </form>
      {props.children}
    </div>
  )
}

export default Create
