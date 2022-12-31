import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const Result = (props) => {
    const [competition, setCompetition]=useState("")
    const [loaded,setLoaded]=useState(false)
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/competitions/' + props.id)

            .then(res => {
                setCompetition(res.data);
                setLoaded(true)
               
                // console.log(res.data)

                

            },)
    }, []);
  return (
    <div>
        <button style={{backgroundColor:"blue"}}><Link to="/">back to home </Link></button>
        {loaded &&
      <>
      <h1>{competition.question}</h1>
      <div style={{display:"flex",margin:"0 auto",width:"40vw"}}>
        <div >
          <h2>
            {competition.coun1.name}
            </h2>  
            {competition.coun1.votes}
        </div>
        <div style={{marginLeft:"60px"}}>
          <h2>
            {competition.coun2.name}
            </h2>  
            {competition.coun2.votes}
        </div>
        { competition.coun3.name !=" " ?
        <div style={{marginLeft:"60px"}}>
          <h2>
            {competition.coun3.name}
            </h2>  
            {competition.coun3.votes}
        </div>:""}

      </div>
      </>}
    </div>
  )
}

export default Result
