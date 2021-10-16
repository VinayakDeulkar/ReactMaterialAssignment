
import SIdebar from './SIdebar'
import  Grid  from '@mui/material/Grid'
import  Button  from '@mui/material/Button';
import  AppBar  from '@mui/material/AppBar';
import  Box  from '@mui/system/Box'
import Toolbar from '@mui/material/Toolbar'

import React, { Component } from 'react'
import {BrowserRouter as  Router,NavLink,Route,Switch,Redirect } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import Home from './Home';

export class Nav extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            loggedIn:''
        }
    }
    componentDidMount=()=>{
        let arr=JSON.parse(localStorage.getItem('mydata'))
        if(arr!=undefined){
            this.setState({
                email:arr.email
            })
        }
        else{
            this.props.history.push('/') 
        }
        

    }
    
    logout=()=>{
        localStorage.clear();
        <Redirect to='/'/>
        // this.props.history.push('/') 
        
    }
    render() {
        return (
            <div>
                <Router>
                <Box sx={{flexGrow:1}}>
                <Grid item lg={12}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                            <NavLink  to="/Dashborad">Home</NavLink>
                            <NavLink  to="/Dashborad/ChangePassword">Change Password</NavLink>
                            Welcome : {this.state.email}
                            <Button variant="outlined" color="inherit" onClick={this.logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
                </Grid>
                <Grid item lg={1}>
                    <SIdebar/>
                    </Grid>
                    
                </Box>
                <Switch>
                                <Route path="/Dashborad/ChangePassword" exact component={ChangePassword}/>
                                <Route path="/Dashborad" exact component={Home}/>
                            </Switch>
                           
{/*                 
                {this.state.loggedIn?(<Redirect to="/Dashborad"/>):(<Redirect to="/"/>)} */}
                </Router>
            </div>
               
        )
    }
}

export default Nav
