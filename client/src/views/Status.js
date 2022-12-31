import React,{useState,useEffect} from 'react'
import TableG from '../component/TableG'
import axios from 'axios'
import { Link } from '@reach/router'

const Status = (props) => {
    const [players,setPlayers]=useState("")
    const [loaded,setLoaded]=useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/Players/')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => {console.error(err);console.log("vvvvv")});
    },[players]);
 
  return (
    <div>
     
      <h2><Link to="/status/game/1">game1</Link>|<Link to="/status/game/2">game2</Link>|<Link to="/status/game/3">game3</Link></h2>
      { loaded && <TableG data={players} num={props.num} />}
    </div>
  )
}

export default Status
