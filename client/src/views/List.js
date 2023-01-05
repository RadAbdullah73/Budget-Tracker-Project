import React, { useState, useEffect } from 'react'
// import Table from '../component/Table'
import axios from 'axios'
import { navigate } from '@reach/router';
import '../App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { InputLabel, TablePagination } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../App.css';
import Stack from '@mui/material/Stack';

const List = () => {
  const [backgroundColor1, setBackgroundColor1] = useState('');
  const [backgroundColor2, setBackgroundColor2] = useState('');
  const [backgroundColor3, setBackgroundColor3] = useState('');
  const [backgroundColor4, setBackgroundColor4] = useState('');
  const [backgroundColor5, setBackgroundColor5] = useState('');
  const [backgroundColor6, setBackgroundColor6] = useState('');
  const [backgroundColor7, setBackgroundColor7] = useState('');
  const [backgroundColor8, setBackgroundColor8] = useState('');
  const [backgroundColor9, setBackgroundColor9] = useState('');
  const [backgroundColor10, setBackgroundColor10] = useState('');
  const [backgroundColor11, setBackgroundColor11] = useState('');
  const [backgroundColor12, setBackgroundColor12] = useState('');

  const handleClick = (n) => {


    if (n == 1) { setBackgroundColor1("green"); setMonth("Jan") } else setBackgroundColor1("")
    if (n == 2) { setBackgroundColor2("green"); setMonth("Feb") } else setBackgroundColor2("")
    if (n == 3) { setBackgroundColor3("green"); setMonth("Mar") } else setBackgroundColor3("")
    if (n == 4) { setBackgroundColor4("green"); setMonth("Apr") } else setBackgroundColor4("")
    if (n == 5) { setBackgroundColor5("green"); setMonth("May") } else setBackgroundColor5("")
    if (n == 6) { setBackgroundColor6("green"); setMonth("Jun") } else setBackgroundColor6("")
    if (n == 7) { setBackgroundColor7("green"); setMonth("Jul") } else setBackgroundColor7("")
    if (n == 8) { setBackgroundColor8("green"); setMonth("Aug") } else setBackgroundColor8("")
    if (n == 9) { setBackgroundColor9("green"); setMonth("Sep") } else setBackgroundColor9("")
    if (n == 10) { setBackgroundColor10("green"); setMonth("Oct") } else setBackgroundColor10("")
    if (n == 11) { setBackgroundColor11("green"); setMonth("Nov") } else setBackgroundColor11("")
    if (n == 12) { setBackgroundColor12("green"); setMonth("Dec") } else setBackgroundColor12("")


  }
  const [Budgets, setBudgets] = useState("")
  const [loaded, setLoaded] = useState("")
  const [month, setMonth] = useState("Jan")
  const [incomeTotalDaily, setIncomeTotalDaily] = useState(0)
  const [Totalexpenses, setTotalExpenses] = useState(0)
  var data = JSON.parse(sessionStorage.getItem('user'))


  const navToSuggest = () => {
    navigate("/suggestion/" + data.user._id)
  }
  const navToProfile = () => {
    navigate("/profile/" + data.user._id)
  }
  const navToAdd = () => {
    navigate("/add")
  }
  const logOut = () => {
    sessionStorage.removeItem('user');
    navigate("/")
  }
  const detail = (id) => {
    navigate("/Budget/" + id)
  }



  useEffect(() => {
    axios.get('http://localhost:8000/api/Budget/month/' + month)
      .then(res => {
        var totalEx
        var totalIn = 0
        console.log(res.data)
        res.data.filter(p => p.user[0]._id == data.user._id).map((item, i) => {

          // setIncomeTotalDaily(parseInt(incomeTotalDaily)+parseInt(item.dailyIncome))
          totalEx += item.sum
          // setTotalExpenses(Totalexpenses+ item.sum)}
          totalIn += item.dailyIncome
        }
        )
        setIncomeTotalDaily(totalIn)
        setTotalExpenses(totalEx)
        setBudgets(res.data);
        setLoaded(true);
        console.log(data.user.salary)

      })
      .catch(err => console.error(err));

  }, [month]);
  //   const removeFromDom = personId => {

  //     setPlayers(players.filter(person => person._id != personId))
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  // }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [theme, setTheme] = React.useState("light");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <div className="App1" >
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
                            <Stack spacing={2} direction="row">
                            <li>
                            
                                    <a href="#"><Button variant="contained" color="success" onClick={navToProfile}>Profile </Button></a>
                                </li>
                                <li><a href="#"><Button variant="contained" color="success" onClick={navToSuggest}> Suggestion </Button></a>
                                </li>
                                <li>
                                    <a href="#"><Button variant="contained" color="success" onClick={navToAdd}>Add Your Expenses </Button></a>
                                </li>
                                <li><a href="#"><Button variant="contained" color="success" onClick={logOut} style={{ backgroundColor: "red" }}>LogOut</Button></a>
                                </li>
                                <li>
                                    <a href="#"><Button variant="contained" color="success" onClick={() => { theme == "light" ? setTheme("dark") : setTheme("light") }} style={{ backgroundColor: "green" }}>Theme</Button></a>
                                </li>
                                </Stack>
                            </ul>
                        </div>

                    </div>

                </nav>
            </header>
      

      {loaded &&

        <>
          <br />
          <InputLabel>salary:{data.user.salary}</InputLabel>
          <br />

          <InputLabel style={{color:'white',fontSize:'20px'}}>total income for this month:{data.user.salary + incomeTotalDaily}</InputLabel>
          <br />

          <ButtonGroup variant="text" aria-label="text button group" >
            <Button onClick={() => handleClick(1)} style={{ backgroundColor: backgroundColor1 ,color:'white' }}>Jan</Button>
            <Button onClick={() => handleClick(2)} style={{ backgroundColor: backgroundColor2 ,color:'white' }}>Feb</Button>
            <Button onClick={() => handleClick(3)} style={{ backgroundColor: backgroundColor3 ,color:'white' }}>Mar</Button>
            <Button onClick={() => handleClick(4)} style={{ backgroundColor: backgroundColor4 ,color:'white' }}>Apr</Button>
            <Button onClick={() => handleClick(5)} style={{ backgroundColor: backgroundColor5 ,color:'white' }}>May</Button>
            <Button onClick={() => handleClick(6)} style={{ backgroundColor: backgroundColor6 ,color:'white' }}>Jun</Button>
            <Button onClick={() => handleClick(7)} style={{ backgroundColor: backgroundColor7 ,color:'white' }}>Jul</Button>
            <Button onClick={() => handleClick(8)} style={{ backgroundColor: backgroundColor8 ,color:'white' }}>Aug</Button>
            <Button onClick={() => handleClick(9)} style={{ backgroundColor: backgroundColor9 ,color:'white' }}>Sep</Button>
            <Button onClick={() => handleClick(10)} style={{ backgroundColor: backgroundColor10 ,color:'white' }}>Oct</Button>
            <Button onClick={() => handleClick(11)} style={{ backgroundColor: backgroundColor11 ,color:'white'   }}>Nov</Button>
            <Button onClick={() => handleClick(12)} style={{ backgroundColor: backgroundColor12  ,color:'white' }}>Dec</Button>
          </ButtonGroup>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <ThemeProvider variant="contained" backgroundColor="black" theme={darkTheme}>
              <CssBaseline />

              <Paper sx={{ width: '100%', overflow: 'hidden' }} >
                <TableContainer component={Paper} style={{border:'1px solid black' }}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell style={{fontSize:'20px'}} align="center">Expenses</StyledTableCell>
                        <StyledTableCell style={{fontSize:'20px'}} align="center">DailyIncome</StyledTableCell>
                        <StyledTableCell  style={{fontSize:'20px'}} align="center">Date</StyledTableCell>
                        <StyledTableCell style={{fontSize:'20px'}} align="center">Action</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Budgets.filter(p => p.user[0]._id == data.user._id).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, i) => (
                        <TableRow key={i}>
                          <StyledTableCell style={{fontSize:'20px'}} align="center">{item.sum}</StyledTableCell>
                          <StyledTableCell style={{fontSize:'20px'}} align="center">{item.dailyIncome}</StyledTableCell>
                          <StyledTableCell style={{fontSize:'20px'}} align="center">{item.set1.slice(0, 10)}</StyledTableCell>
                          <StyledTableCell style={{fontSize:'20px'}} align="center"><Button variant="contained" color="success" style={{backgroundColor:'black'}} onClick={() => detail(item._id)}>detail</Button></StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 15, 100]}
                  component="div"
                  count={Budgets.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </ThemeProvider>
          </div>
        </>
      }
    </div>
  )
}

export default List