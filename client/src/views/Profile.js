import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Create from '../component/Create'
import { Link, navigate } from '@reach/router';
import Chart from './Chart'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  FormControl,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';
import useLogin from '../hooks/useLogin';
import '../component/assets/css/bootstrap.css'
import "../component/assets/css/style.css"
import "../component/assets/css/font-awesome.min.css"






const Profile = (props) => {
    const [thisUser, setThisUser]=useState("")
    const [loaded,setLoaded]=useState(false)
    const [errors, setErrors] = useState([]); 
    const[month,setMonth]=useState("Jan")
    const[Budgets , setBudgets] = useState([])
    const[incomeTotalDaily , setIncomeTotalDaily] = useState(0)
    const[Totalexpenses , setTotalExpenses] = useState(0)

    
    var data = JSON.parse(sessionStorage.getItem('user'))

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' + props.id)

            .then(res => {
              setThisUser(res.data);
                setLoaded(true)
              
            },)
    }, []);
    useEffect(()=>{
      axios.get('http://localhost:8000/api/Budget/month/'+month)
      .then(res=>{
        var totalEx=0
        var totalIn=0
        res.data.filter(p=>p.user[0]._id==data.user._id).map((item,i)=>{

          // setIncomeTotalDaily(parseInt(incomeTotalDaily)+parseInt(item.dailyIncome))
          totalEx+=item.sum
        // setTotalExpenses(Totalexpenses+ item.sum)}
        totalIn+=item.dailyIncome}
        )
        setIncomeTotalDaily(totalIn)
        setTotalExpenses(totalEx)
          setBudgets(res.data);
          setLoaded(true);
          console.log(data.user.salary)

      })
      .catch(err => console.error(err));

  },[]);
  const homePage=()=>{
    navigate("/home")
}




    return (

        <div >
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

                                <li><a href="#contact-sec">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#our-sec">Our Team</a>
                                </li>

                            </ul>
                        </div>

                    </div>

                </nav>
            </header>
            <div style={{backgroundColor:'#1e1e1e', color :'green'}}>
          
        
            {loaded &&
            <>
            
            <div style={{justifyContent:"space-evenly",display:'flex', marginTop:'70px'}}>
<TableContainer  component={Paper} style={{ height:'10%',width:'50%', backgroundColor:'#47a447',border:'1px solid black' }}>
      <Table sx={{ minWidth: 400 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
                <Stack direction="row" spacing={2}>
          
          <Avatar src="/broken-image.jpg" />
          </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
            <TableRow >
              <TableCell style={{fontSize:'20px'}}>User Name : {thisUser.firstName} {thisUser.lastName}</TableCell>
              {/* <TableCell align="right"></TableCell> */}
            </TableRow>
            <TableRow >
              <TableCell style={{fontSize:'20px'}}>Email : {thisUser.email} </TableCell>
              {/* <TableCell align="right"></TableCell> */}
            </TableRow>
<TableRow >
              <TableCell style={{fontSize:'20px'}}> Salary : {thisUser.salary}</TableCell>
              {/* <TableCell align="right"></TableCell> */}
            </TableRow>
            
          <TableRow>
            <TableCell rowSpan={3} />
            {/* <TableCell colSpan={2} style={{fontSize:'20px'}}>Total Expenses : </TableCell>           */}
          </TableRow>
          <TableRow>
            <TableCell style={{fontSize:'20px'}}>All Expenses for this Month: {Totalexpenses}</TableCell>
            {/* <TableCell align="right"></TableCell>            */}
          </TableRow>
          <TableRow>
          <TableCell style={{fontSize:'20px'}}>All Incomes: {incomeTotalDaily}</TableCell>
            {/* <TableCell align="right"></TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

            </div>

            
           
      <div style={{border:"3px solid green",display:"flex",justifyContent:"space-evenly" , height:'20px', backgroundColor:'#229954', marginTop:'10px'}}>
          
          
  
        </div>
    

           

          
            </>
}
<div style={{display:'flex' , justifyContent:'space-evenly' , marginTop:'10px'}}>
<Chart userId ={data.user._id}></Chart>
<Stack direction="column" spacing={2} style={{marginTop:'50px'}}>
      <Button variant="contained"style={{backgroundColor:'#212F3D'}}>
        Food
      </Button>
      <Button variant="contained" color="success"style={{backgroundColor:'#707B7C'}}>
      Residence
      </Button>
      <Button variant="contained" color="error"style={{backgroundColor:'#ff33cc'}}>
        Transport
      </Button>
      <Button variant="contained" color="error"style={{backgroundColor:'#D4AC0D'}}>
      Clothes
      </Button>
      <Button variant="contained" color="error"style={{backgroundColor:'#229954'}}>
      Health
      </Button>
      <Button variant="contained" color="error"style={{backgroundColor:'#2471A3'}}>
      Entertainment
      </Button>
      <Button variant="contained" color="error"style={{backgroundColor:'#7D3C98'}}>
      Maintenance
      </Button>
      <Button variant="contained" color="error"style={{backgroundColor:'#A93226'}}>
      Others
      </Button>

    </Stack>
    </div>
    </div>
        </div>
    )
}

export default Profile