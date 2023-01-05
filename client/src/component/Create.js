
import React, { useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import {TextField } from '@material-ui/core';
import "./assets/css/styleReg.css"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Create = (props) => {
  const [dailyIncome, setDailyIncome] = useState(props.initialDailyIncome)
  const [expenses, setExpenses] = useState(props.initialExpenses)
  const [debts, setDebts] = useState(0)
  const [select, setSelect] = useState(props.initialSelect)
  const [food, setFood] = useState(0)
  const [residence, setResidence] = useState(0)
  const [transport, setTransport] = useState(0)
  const [clothes, setClothes] = useState(0)
  const [health, setHealth] = useState(0)
  const [entertainment, setEntertainment] = useState(0)
  const [maintenance, setMaintenance] = useState(0)
  const [other, setOther] = useState(0)

  const color = grey[50];

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },

    }
  });




  var data = JSON.parse(sessionStorage.getItem('user'))


  const handleSubmet = (e) => {
    //       var dayClicked = true;
    //       if (dayClicked) {
    //         alert("Error!");
    //     }
    //     else {
    //       variable += 1;
    //       dayClicked = false;
    //   }
    //   setTimeout(function() {
    //     dayClicked = true;
    // }, 86400000);

    e.preventDefault();
    var sum = 0
    sum = parseInt(food) + parseInt(residence) + parseInt(transport) + parseInt(clothes) + parseInt(health) + parseInt(entertainment) + parseInt(maintenance) + parseInt(other) + parseInt(debts)
    props.onSubmitProp(dailyIncome, debts, expenses, food, residence, transport, clothes, health, entertainment, maintenance, other, sum);

  }
  const navToHome = () => {
    navigate("/home/")
  }

  const logOut = () => {
    sessionStorage.removeItem('user');
    navigate("/")
  }
  return (
<div>
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
    <div className='AddingPage'>
      <div class="background1">
                <div class="shape1"></div>
                <div class="shape1"></div>
            </div>

      <h2 className='rooo' style={{marginTop:'10px'}} >Add your Finance for Today</h2>

     
      <form onSubmit={handleSubmet}>
      <Box m={1}>
        <div>
  
          <br></br>
          <h3 className='headingDaily'>Daily Income</h3>
         
          <TextField variant="standard" color="success" focused style={{ marginLeft: '520px' }} inputProps={{ style: { fontSize: 25 , color:'white' } }}  helperText="DailyIncome" type="text" value={dailyIncome} onChange={(e) => setDailyIncome(e.target.value)} />
        </div>
        <div>
          <br></br>
          <h3 className='headingCreate'>Add your expenses for today</h3>
          <div style={{ margin: "0 0 0 40%", width: "20%", display: "flex" }}>
            <Grid>
              <TextField variant="standard" color="success" focused inputProps={{ style: { fontSize: 25 , color:'white' } }}  helperText="Food" type="text" value={food} onChange={(e) => setFood(e.target.value)} />
              <TextField variant="standard" color="success" focused  inputProps={{ style: { fontSize: 25 , color:'white' } }} helperText="Residence" type="text" value={residence} onChange={(e) => setResidence(e.target.value)} />
              <TextField variant="standard" color="success" focused inputProps={{ style: { fontSize: 25 , color:'white' } }} helperText="Transport" type="text" value={transport} onChange={(e) => setTransport(e.target.value)} />
              <TextField variant="standard" color="success" focused inputProps={{ style: { fontSize: 25 , color:'white' } }} helperText="Clothes" type="text" value={clothes} onChange={(e) => setClothes(e.target.value)} />
            </Grid>
            <div style={{ width: "40%" }}>
            </div>
            <div>
              <TextField variant="standard" color="success" focused  inputProps={{ style: { fontSize: 25 , color:'white' } }} helperText="Health" type="text" value={health} onChange={(e) => setHealth(e.target.value)} />
              <TextField variant="standard" color="success" focused inputProps={{ style: { fontSize: 25 , color:'white' } }} helperText="Entertainment" type="text" value={entertainment} onChange={(e) => setEntertainment(e.target.value)} />
              <TextField variant="standard" color="success" focused inputProps={{ style: { fontSize: 25  , color:'white'} }} helperText="Maintenance" type="text" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} />
              <TextField variant="standard" color="success" focused inputProps={{ style: { fontSize: 25 , color:'white' } }} helperText="Others" type="text" value={other} onChange={(e) => setOther(e.target.value)} />
            </div>
          </div>

        </div>
        <button className='BtnAdd' style={{backgroundColor:'#27c00a'}}>Add </button>
        </Box>
      </form>
      {props.children}
    </div>
    </div>
  )
}

export default Create
