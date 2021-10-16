import React, { Component } from 'react'
import  Grid  from '@mui/material/Grid'
import  Button  from '@mui/material/Button'
import  TextField  from '@mui/material/TextField'

import axios from 'axios';
const regForPassword=RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
const client=axios.create({
    baseURL:"http://localhost:3001/Data"
})
export class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state={
            Pass:[],
            email:'',
            currentpassword:'',
            Newpassword:'',
            Confirmpassword:'',
            errors:{
                currentpassword:'',
            Newpassword:'',
            Confirmpassword:''
            }
        }
    }
    componentDidMount=async()=>{
        try{
            const res=await client.get();
            console.log(res);
            this.setState({Pass:res.data})
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
            case 'Cpassword':
                const err=regForPassword.test(value)?'':'Enter Valid Password';
                this.setState({
                    errors:{
                        currentpassword:err
                    }
                })
                
                console.log(this.state.errors.currentpassword);
                break;
            case 'Newpassword':
                const perr=regForPassword.test(value)?'':'Enter Valid Password';
                console.log();
                console.log(perr);
                this.setState({
                    errors:{
                        Newpassword:perr
                    }
                })
                
                break;
                case 'Confirmpassword':
                    const per=regForPassword.test(value)?'':'Enter Valid Password';
                    console.log();
                    console.log(per);
                    this.setState({
                        errors:{
                            Confirmpassword:per
                        }
                    })
                    
                    break;
            default:
                break;
        }
    }
    changepass=async(event)=>{
        try{
            event.preventDefault();
            let arr=JSON.parse(localStorage.getItem('mydata'))
            
            console.log(arr.password);
            console.log(this.state.currentpassword);
        if(arr.password==this.state.currentpassword){
            if(this.state.Newpassword==this.state.Confirmpassword){
                let email=arr.email
                let  formdata={id:arr.id,email:email,password:this.state.Newpassword}
                client.put(`/${formdata.id}`,formdata)
                localStorage.setItem('mydata',JSON.stringify(formdata))
                
            }
            else{
                alert("Both password should be same")
            }
        }
        else{
            alert("Enter valid current password")
        }
        }
        catch(err){
            console.log(err);
        }
        
    }
    render() {
        
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item lg={4}></Grid>
                    <Grid item lg={4}>
                        <form  onSubmit={this.changepass}>
                        <div> <TextField id="Text" label="Current Password" value={this.state.currentpassword} name="currentpassword" variant="filled" onChange={this.handler}/></div>
                            <div><TextField id="filled-password-input" name="Newpassword"  label="New Password" type="text" onChange={this.handler} variant="filled" />
                            </div>
                            <div><TextField id="filled-password-input" name="Confirmpassword"  label="ConfirmPassword" type="text" onChange={this.handler} variant="filled" />
                            </div>
                            <div>
                            <Button variant="contained" type="submit" label="Change Password" >Change Password</Button></div>
                        </form>
                        </Grid>
                </Grid>
            </div>
        )
    }
}

export default ChangePassword
