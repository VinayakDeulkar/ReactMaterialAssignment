import React, { Component } from 'react'
import  Grid  from '@mui/material/Grid'
import axios from 'axios';
const client=axios.create({
    baseURL:"http://localhost:3001/Data"
})
let arr=JSON.parse(localStorage.getItem('mydata'))
export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            serverdata:[],
            sdata:''
            
        }
    }
    componentDidMount=async()=>{
        try{
            const res=await client.get();
            console.log(res);
            this.setState({serverdata:res.data})
            this.state.serverdata.map(element=>{
                if(element.email===arr.email){
                    this.sdata.setState({
                        id:element.id,
                        email:element.email
                    })
                }
            }
                
                )
        }
        catch(err){
            console.log(err);
        }
    }
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item lg={2}></Grid>
                    <Grid item lg={4}>
                        {this.state.sdata.id}{this.state.sdata.email}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home
