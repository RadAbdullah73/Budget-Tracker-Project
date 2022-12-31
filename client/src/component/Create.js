
import React ,{useState} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Create = (props) => {
    const [question,setQust]=useState(props.initialName)
    const [coun1,setCoun1]=useState(props.initialCoun1)
    const [coun2,setCoun2]=useState(props.initialCoun2)
    const [coun3,setCoun3]=useState(props.initialCoun3)
    
    const handleSubmet=(e)=>{
        e.preventDefault();
        // axios.post('http://localhost:8000/api/Products/new', {
        //     Title,
        //     Price,
        //     Desc
        // })
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
        props.onSubmitProp({question,"coun1.name":coun1,"coun2.name":coun2,"coun3.name":coun3,"coun1.votes":0,"coun2.votes":0,"votes":0,"coun3.votes":0,"votes":0 });
    }
  return (
    <div>
      <h1>Product Manager</h1>
      <form onSubmit={handleSubmet}>
        <div>
            <label>question</label>
            <input type="text" value={question} onChange={(e)=>setQust(e.target.value)}></input>
            {props.children}
        </div>
        <div>
            <label>Country 1</label>
            <input type="text" value={coun1} onChange={(e)=>setCoun1(e.target.value)}></input>
        </div>
        <div>
            <label>Country 2</label>
            <input type="text" value={coun2} onChange={(e)=>setCoun2(e.target.value)}></input>
        </div>
        <div>
            <label>Country 3</label>
            <input type="text" value={coun3} onChange={(e)=>setCoun3(e.target.value)}></input>
        </div>
      
        <button style={{backgroundColor:"blue"}}>Add </button>
       
      </form>
    
    </div>
  )
}

export default Create
