
import  Grid  from '@mui/material/Grid'
import React, { Component } from 'react'
import Nav from './Nav'
import SIdebar from './SIdebar'
import ChangePassword from './ChangePassword'

import {BrowserRouter as  Router,Route,Switch,Redirect } from 'react-router-dom';

export class Dashborad extends Component {
    render() {
        return (
            <div><Router>
                <Grid>
                    <Grid item lg={12}>
                        <Nav/></Grid>
                        
                </Grid> </Router>
            </div>
        )
    }
}

export default Dashborad
