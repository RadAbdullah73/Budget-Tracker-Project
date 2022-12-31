import React ,{useState} from 'react'
import Create from '../component/Create';
import axios from 'axios';
import { Link,navigate } from '@reach/router';

const AddPlayer = () => {
    const [competitions,setCompetitions]=useState("")
    const [errors, setErrors] = useState([]); 

    const handle=product1=>{
        axios.post('http://localhost:8000/api/competitions/new', product1)
               .then(res=> {setCompetitions([...competitions, res.data])})
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
         
          <Create onSubmitProp={handle} initialName="" initialCoun1=" " initialCoun2=" " initialCoun3=" " >
           {errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>)}
           </Create>


      
    </div>
  )
}

export default AddPlayer
