import React,{useState,useEffect} from 'react'
import Table from '../component/Table'
import axios from 'axios'
import { Link } from '@reach/router'
import { format, formatDistance } from "date-fns";
import { Button } from '@material-ui/core';
import useLogout from '../hooks/useLogout'
import { navigate } from '@reach/router';
import TableG from '../component/TableG';


const List = () => {
    const [competitions,setCompetitions]=useState("")
    const [loaded,setLoaded]=useState("")

    
   
    useEffect(()=>{
        axios.get('http://localhost:8000/api/competitions/')
            .then(res=>{
                setCompetitions(res.data);
                setLoaded(true);
                
            })
            .catch(err => console.error(err));
      
    },[competitions]);
  //   const removeFromDom = personId => {
        
  //     setPlayers(players.filter(person => person._id != personId))
  // }
  return (
    <div   >
      <Link to="competitions/new"><button   style={{backgroundColor:"blue",color:"white"}}> create your own competitions</button></Link>
      {loaded &&
      <div style={{display:"flex" , justifyContent :"center"}}>
         {/* <TableG data={competitions} /> */}
        <Table  data={competitions} />
       
        </div>}
          

    </div>

  )
}

export default List
