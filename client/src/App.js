import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Router } from '@reach/router';
import List from './views/List';
import AddPlayer from './views/AddPlayer';
import Status from './views/Status';
import Show from './views/Show';
import Result from './views/Result';
import CreateUser from './views/CreateUser';
import RegisterForm from './component/RegisterForm'
import LoginForm from './component/LoginForm'





function App() {
  return (
    <div className="App" >
     
      
      
      <Router>
     
        
        <RegisterForm path="/"/>
            <LoginForm path="/login"/>
            <List path="/home"/>
      

       

      </Router>
    </div>
  );
}

export default App;
