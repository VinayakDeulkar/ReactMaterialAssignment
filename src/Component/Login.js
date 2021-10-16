import  Button  from '@mui/material/Button'
import  TextField  from '@mui/material/TextField'
import React, { Component } from 'react'
import axios from 'axios';
import  Grid  from '@mui/material/Grid';
import {BrowserRouter as  Router,Route,Switch,Redirect } from 'react-router-dom';
import Checkbox  from '@mui/material/Checkbox';
import  FormControlLabel  from '@mui/material/FormControlLabel';
const arr=JSON.parse(localStorage.getItem('mydata'))
const client=axios.create({
    baseURL:"http://localhost:3001/Data"
})
const regForEmail=RegExp(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/);
const regForPassword=RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            LoginData:[],
            
            email:'',
            password:'',
            errors:{
                email:'',
                password:''
            }
        }
    }
    componentDidMount=async()=>{
        try{
            const res=await client.get();
            console.log(res);
            this.setState({LoginData:res.data})
        }
        catch(err){
            console.log(err);
        }
        
    }
    handler=(event)=>{
        const{name,value}=event.target;
        this.setState({[name]:value})
        console.log(value);
        switch(name){
            case 'email':
                const err=regForEmail.test(value)?'':'Enter Valid email';
                this.setState({
                    errors:{
                        email:err
                    }
                })
                
                console.log(this.state.errors.email);
                break;
            case 'password':
                const perr=regForPassword.test(value)?'':'Enter Valid Password';
                console.log();
                console.log(perr);
                this.setState({
                    errors:{
                        password:perr
                    }
                })
                
                break;
            default:
                break;
        }
    }
    addlocal=()=>{
       this.state.LoginData.forEach(element => {
           if(element.email===this.state.email&&element.password===this.state.password){
               console.log(this.state.password);
               let store={'id':element.id,'email':this.state.email,'password':this.state.password}
               localStorage.setItem('mydata',JSON.stringify(store))
               
               this.props.history.push('/Dashborad')  
           }
           
       });
    }
    render() {
        return (
            <div>
                <Router>
                <Grid container spacing={2}>
                    <Grid item lg={4}></Grid>
                    <Grid item lg={4}>
                        <h2>LOGIN</h2>
                        <form  onClick={this.addlocal}>
                        <div> <TextField id="email" label="Email" name="email" value={this.state.email} variant="filled" onChange={this.handler}/></div>
                            <div><TextField id="filled-password-input" name="password"  label="Password" type="password"onChange={this.handler} variant="filled" />
                            </div>
                            <div>
                                <FormControlLabel control={<Checkbox/>} label="Remember me"/>
                                
                            </div>
                            <div>
                            <Button variant="contained" type="submit" label="Login" >LOGIN</Button></div>
                        </form>
                        </Grid>
                </Grid>
                {
                    arr!=undefined?(<Redirect to="/Dashborad" />):(<Redirect to="/" />)}
                </Router>
            </div>
        )
    }
}

export default Login
