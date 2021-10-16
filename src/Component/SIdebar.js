import React, { Component } from 'react'
import  AppBar  from '@mui/material/AppBar';
import {BrowserRouter as  Router,NavLink,Route,Switch,Redirect } from 'react-router-dom';

export class SIdebar extends Component {
    render() {
        return (
            <div>
                <div>
                <NavLink  to="/Dashborad/Category">Category  </NavLink>
                <NavLink  to="/Dashborad/Products">Products </NavLink>
                <NavLink  to="/Dashborad/Orders">Orders </NavLink>
                <NavLink  to="/Dashborad/Feedback">Feedback</NavLink>
                </div>
            </div>
        )
    }
}

export default SIdebar
