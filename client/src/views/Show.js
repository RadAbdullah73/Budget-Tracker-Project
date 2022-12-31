import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Create from '../component/Create'
import { Link, navigate } from '@reach/router';

const Show = (props) => {
    const [competition, setCompetition]=useState("")
    const [loaded,setLoaded]=useState(false)
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/competitions/' + props.id)

            .then(res => {
                setCompetition(res.data);
                setLoaded(true)
               
                // console.log(res.data)

                

            },)
    }, []);
    const update = (num) => {

        axios.put('http://localhost:8000/api/competitions/update/' + props.id, num==0?{"coun1.votes":competition.coun1.votes+1}:num==1?{"coun2.votes":competition.coun2.votes+1}:{"coun3.votes":competition.coun3.votes+1}

        )
            .then(res =>{ console.log(res)
                navigate("/result/"+props.id)
            })
            .catch(err => {console.log(err)
                // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // const errorArr = []; // Define a temp error array to push the messages in
                // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                //     errorArr.push(errorResponse[key].message)
                // }
                // // Set Errors
                // setErrors(errorArr);
            })
    }
    return (
        <div>
            
            {loaded &&
            <>
           
            <h1>{competition.question}</h1>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div >
              <p>{competition.coun1.name}</p> 
              <button onClick={()=>update(0)} style={{backgroundColor:"yellow"}}>vote {competition.coun1.name  } </button>
            </div>
            <div>
              <p>{competition.coun3.name}</p> 
              <button onClick={()=>update(1)} style={{backgroundColor:"red"}}>vote {competition.coun2.name} </button>
            </div>
            { competition.coun3.name !=" " ?
            <div>
              <p>{competition.coun3.name}</p> 
              <button onClick={()=>update(2)} style={{backgroundColor:"green"}}>vote {competition.coun3.name} </button>
            </div>:""}
            <div>
              {/* <p>{competition.coun3.name}</p> 
              <button onClick={()=>update(2)} style={{backgroundColor:"yellow"}}>vote {competition.coun3.votes} </button> */}
              
            
            
            </div>
            </div>
            </>
}
           
        </div>
    )
}

export default Show