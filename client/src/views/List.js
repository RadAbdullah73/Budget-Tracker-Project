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

      <ButtonGroup spacing={2} variant="contained" direction="row" aria-label="outlined primary button group">
        <Button onClick={navToProfile}>Profile Page</Button>
        <Button onClick={navToSuggest}>Add Suggestion for Market</Button>
        <Button onClick={navToAdd}>Add Your Expenses For Today</Button>
        <Button onClick={logOut} style={{ backgroundColor: "red" }}>LogOut</Button>
        <Button onClick={() => { theme == "light" ? setTheme("dark") : setTheme("light") }} style={{ backgroundColor: "green" }}>Theme</Button>
      </ButtonGroup>

      {loaded &&

        <>
          <br />
          <InputLabel>salary:{data.user.salary}</InputLabel>
          <br />

          <InputLabel>total income for this month:{data.user.salary + incomeTotalDaily}</InputLabel>
          <br />

          <ButtonGroup variant="text" aria-label="text button group" >
            <Button onClick={() => handleClick(1)} style={{ backgroundColor: backgroundColor1 }}>Jan</Button>
            <Button onClick={() => handleClick(2)} style={{ backgroundColor: backgroundColor2 }}>Feb</Button>
            <Button onClick={() => handleClick(3)} style={{ backgroundColor: backgroundColor3 }}>Mar</Button>
            <Button onClick={() => handleClick(4)} style={{ backgroundColor: backgroundColor4 }}>Apr</Button>
            <Button onClick={() => handleClick(5)} style={{ backgroundColor: backgroundColor5 }}>May</Button>
            <Button onClick={() => handleClick(6)} style={{ backgroundColor: backgroundColor6 }}>Jun</Button>
            <Button onClick={() => handleClick(7)} style={{ backgroundColor: backgroundColor7 }}>Jul</Button>
            <Button onClick={() => handleClick(8)} style={{ backgroundColor: backgroundColor8 }}>Aug</Button>
            <Button onClick={() => handleClick(9)} style={{ backgroundColor: backgroundColor9 }}>Sep</Button>
            <Button onClick={() => handleClick(10)} style={{ backgroundColor: backgroundColor10 }}>Oct</Button>
            <Button onClick={() => handleClick(11)} style={{ backgroundColor: backgroundColor11 }}>Nov</Button>
            <Button onClick={() => handleClick(12)} style={{ backgroundColor: backgroundColor12 }}>Dec</Button>
          </ButtonGroup>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <ThemeProvider variant="contained" backgroundColor="black" theme={darkTheme}>
              <CssBaseline />

              <Paper sx={{ width: '100%', overflow: 'hidden' }} >
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">Expenses</StyledTableCell>
                        <StyledTableCell align="center">DailyIncome</StyledTableCell>
                        <StyledTableCell align="center">Date</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Budgets.filter(p => p.user[0]._id == data.user._id).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, i) => (
                        <TableRow key={i}>
                          <StyledTableCell align="center">{item.sum}</StyledTableCell>
                          <StyledTableCell align="center">{item.dailyIncome}</StyledTableCell>
                          <StyledTableCell align="center">{item.set1.slice(0, 10)}</StyledTableCell>
                          <StyledTableCell align="center"><Button variant="contained" color="success" onClick={() => detail(item._id)}>detail</Button></StyledTableCell>
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