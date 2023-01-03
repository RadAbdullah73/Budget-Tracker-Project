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
import Suggested from './views/Suggested';
import Home from './component/Home';





function App() {
  return (
    <div className="App" >

      
      
      <Router>
        <Home path="/" />
         <RegisterForm path="/reg"/>
        <LoginForm path="/login"/>
        <Adding path="/add"/>
        <Profile path="/profile/:id"/>
        <List path="/home"/>
        <Result path="/Budget/:id"/>
        <Suggested path="/suggestion/:id"/>

      </Router>
    </div>
  );
}

export default App;
