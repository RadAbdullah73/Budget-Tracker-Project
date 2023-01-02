import React ,{useState} from 'react'
import Create from '../component/Create';
import axios from 'axios';
import { Link,navigate } from '@reach/router';

const Adding = () => {
    const [competitions,setCompetitions]=useState("")
    const [errors, setErrors] = useState([]); 
    var data = JSON.parse(sessionStorage.getItem('user'))
    

    const handle=(dailyIncome , debts , expenses , food , residence , transport , clothes , health , entertainment , maintenance , other , sum )=>{
        axios.post('http://localhost:8000/api/Budget/new/'+data.user._id ,{'expenses.food': food   , 'expenses.residence' : residence , 'expenses.transport' : transport , 'expenses.clothes' : clothes , 'expenses.health' : health , 'expenses.entertainment' : entertainment ,  'expenses.maintenance' : maintenance , 'expenses.other' : other , 'dailyIncome':dailyIncome , 'expenses.debts':debts , 'sum' : sum} )
               .then(res=> console.log(res))
               .catch(err=>{console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })           
       }
  return (
    <div>
<button style={{backgroundColor:"blue"}}><Link to="/">back to home </Link></button>

          <Create onSubmitProp={handle}  initialDailyIncome=" " initialExpenses=" " initialDepts=" "  initialSelect = " ">
           {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
           </Create>


      
    </div>
  )
}

export default Adding
