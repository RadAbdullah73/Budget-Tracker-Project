import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Router } from '@reach/router';
import List from './views/List';
// import AddPlayer from './views/AddPlayer';
import Status from './views/Status';
import Result from './views/Result';
import CreateUser from './views/CreateUser';
import RegisterForm from './component/RegisterForm'
import LoginForm from './component/LoginForm'
import Adding from './views/Adding';
import Profile from './views/Profile';





function App() {
  return (
    <div className="App" >

      
      
      <Router>

         <RegisterForm path="/"/>
        <LoginForm path="/login"/>
        <Adding path="/add"/>
        <Profile path="/profile/:id"/>
        <List path="/home"/>


       

      </Router>
    </div>
  );
}

export default App;
