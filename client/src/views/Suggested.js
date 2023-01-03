import { navigate } from '@reach/router'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import io from 'socket.io-client';


const Suggested = () => {
    const [title,setTitle]=useState("")
    const [suggested,setSuggested]=useState("")
    const [suggestions,setSuggestions]=useState("")
    const [loaded,setLoaded]=useState("")
    const [x,setX]=useState(0)
    const [socket] = useState(() => io(':8000'));
    var data = JSON.parse(sessionStorage.getItem('user'))
    const handleSubmet=(e)=>{
      e.preventDefault()
      
     
      axios.post('http://localhost:8000/api/Suggested/new/'+data.user._id,{
        title,
        suggested
  
  
      }
    
      
  )
  .then(res=>{x==0?setX(1):setX(0)
    socket.emit("client",res.data)
  })
 
  
}
useEffect(()=>{
axios.get('http://localhost:8000/api/Suggested')
.then(res=>{
  
  setSuggestions(res.data);
  setLoaded(true);
  socket.on('server',data => {
    x==0?setX(1):setX(0)
    console.log(data)
 
  
})
})},[x])

 
    
  
return (
  <div>
  <h2>Suggest a place</h2>
  <form onSubmit={handleSubmet}>
    <div style={{margin:"40px"}}>
        <label>Title</label>
        <input type="text"  onChange={(e)=>setTitle(e.target.value)}></input>
   
    </div>
    <div style={{display:"flex" ,justifyContent:"center"}}>
        <label>Description</label>
        <textarea rows="4" cols="50"   onChange={(e)=>setSuggested(e.target.value)}></textarea>
    </div>
  
    <button>Add Place</button>
   
  </form>
  <h1>Suggestion</h1>
  {loaded  &&
    <>
  {suggestions.map((item,i)=>{

    return <div key={i}>
      <h2>{item.title}</h2>
      <p>{item.suggested}</p>
      <p>from:{item.user[0].firstName} {item.user[0].lastName}</p>
    </div>


  })}</>}



</div>
)


    }

 

export default Suggested