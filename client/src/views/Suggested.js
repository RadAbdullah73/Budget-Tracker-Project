
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import io from 'socket.io-client';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useLogin from '../hooks/useLogin';
import { navigate } from '@reach/router';
import '../component/assets/css/bootstrap.css'
import "../component/assets/css/style.css"
import "../component/assets/css/font-awesome.min.css"
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';



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

const logOut = () => {
  sessionStorage.removeItem('user');
  navigate("/")
}

    
  
return (
  <div className="App">
    <header>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation" style={{paddingTop:'10px' }}>
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <img src={require("../component/assets/img/Budget_Tracker_1.png")} alt="" style={{height: '10%',width: '30%'}}/>
                        </div>

                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav navbar-right">
        

                                <li><a href="/home">Home Page</a>
                                </li>

                                <li><a href="#contact-sec"><Button onClick={logOut} style={{ backgroundColor: "red" }}>LogOut</Button></a>
                                </li>
                                <li>
                                    {/* <a href="#our-sec">Our Team</a> */}
                                </li>

                            </ul>
                        </div>

                    </div>

                </nav>
            </header>
  <h1 style={{marginTop:"75px" ,color:"white", textDecoration: "none"}}>Suggest a place</h1>

  <form style={{marginTop:"20px"}}  onSubmit={handleSubmet}>


    <div style={{margin:"0 auto",width:"50%"}} className='form-group row'>
    {/* <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        
      </div>
    </Box> */}
        <label style={{marginTop:"4px" , color:"white"}}  formfor="inputEmail3" className="col-sm-2 col-form-label">Title</label>
        <div className='col-sm-10'>
        <input style={{color:"black"}} id="inputEmail3" className="form-control" type="text"  onChange={(e)=>setTitle(e.target.value)}></input>
        </div>
    </div>
    <div style={{margin:"5%"}} className='form-group row '>
        <label  className="col-sm-2 col-form-label" style={{ color:"white"}}  >Description</label>
        <div className='col-8'>
        <textarea style={{color:"black"}} className="form-control "   onChange={(e)=>setSuggested(e.target.value)}></textarea>
        </div>
    </div>
  
    <div  className="form-group row">
    <div  className="col-10">
      
      <button style={{width:"10%"}} type="submit" className="btn btn-primary">Add a blace</button>
    </div>
    </div>
   
  </form>
  <hr/>
  <h1 style={{marginTop:"100px" , color:"white"}}>Suggestion</h1>
  {loaded  &&
    <>
  {suggestions.map((item,i)=>{

    return <div style={{width:"20%",margin:"0 auto",marginTop:"50px",boxShadow: "2px 2px green" }} className='card'  key={i}>
      <div style={{border:"1px solid black" }} className="card-body">
      <h5  style={{ color:"white"}}  className="card-title">{item.title}</h5>
      <h6 style={{ color:"white"}}  className="card-subtitle mb-2 text-muted">from:{item.user[0].firstName} {item.user[0].lastName}</h6>
      <p style={{ color:"white"}}  className="card-text">{item.suggested}</p>
    </div>
    </div>
    


  })}</>}

</div>

)


    }

 

export default Suggested