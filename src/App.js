import  Container  from '@mui/material/Container';
import './App.css';



import {BrowserRouter as  Router,Route,Switch,Redirect } from 'react-router-dom';
import Login from './Component/Login';
import Dashborad from './Component/Dashborad';

let arr=JSON.parse(localStorage.getItem('mydata'))
function App() {
  return (
    <>
   
      <Router>
        <Container>
          
          <Switch>
            
              <Route path="/" exact component={Login}/>
              <Route path="/Dashborad" exact component={Dashborad}/>
              <Redirect to="/"/>
              
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
