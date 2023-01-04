
import React, { useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import {TextField } from '@material-ui/core';
import "./assets/css/styleReg.css"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";


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


  return (

    <div className='AddingPage'>
      <div class="background1">
                <div class="shape1"></div>
                <div class="shape1"></div>
            </div>
      <h1 className='headerAddingPage'>Add your Finance for Today </h1>
     
      <form onSubmit={handleSubmet}>
        <div>
          <br></br>
          <h3 className='headingDaily'>Daily Income</h3>
          <TextField style={{ marginLeft: '520px' }} inputProps={{ style: { fontSize: 25 } }}  helperText="DailyIncome" type="text" value={dailyIncome} onChange={(e) => setDailyIncome(e.target.value)} />
        </div>
        <div>
          <br></br>
          <h3 className='headingCreate'>Add your expenses for today</h3>
          <div style={{ margin: "0 0 0 40%", width: "20%", display: "flex" }}>
            <Grid>
              <TextField inputProps={{ style: { fontSize: 25 } }}  helperText="Food" type="text" value={food} onChange={(e) => setFood(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Residence" type="text" value={residence} onChange={(e) => setResidence(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Transport" type="text" value={transport} onChange={(e) => setTransport(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Clothes" type="text" value={clothes} onChange={(e) => setClothes(e.target.value)} />
            </Grid>
            <div style={{ width: "40%" }}>
            </div>
            <div>
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Health" type="text" value={health} onChange={(e) => setHealth(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Entertainment" type="text" value={entertainment} onChange={(e) => setEntertainment(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Maintenance" type="text" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} />
              <TextField inputProps={{ style: { fontSize: 25 } }} helperText="Others" type="text" value={other} onChange={(e) => setOther(e.target.value)} />
            </div>
          </div>

        </div>
        <button className='BtnAdd'>Add </button>

      </form>
      {props.children}
    </div>
  )
}

export default Create
