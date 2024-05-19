import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css" 
export const Header = () => {
    const getActiveStyle = ({isActive})=> ({
        margin:"1rem",
        fontWeigth : isActive ? "600" : "400",
        color: isActive ? "red" : "",
        padding: "1rem"
    })
  return (
    <div className='header'>
        <h1>Financial Mangement System</h1>
        <nav className='nav'>
            <NavLink className='navLink' to ="/" style={getActiveStyle}>Add New Entry</NavLink>
            <NavLink  className='navLink' to ="/income" style={getActiveStyle} >
                Income
            </NavLink>
            <NavLink className='navLink' to ="/expenses" style={getActiveStyle}>Expenses</NavLink>
            <NavLink className='navLink' to ="/savings" style={getActiveStyle}>Savings</NavLink>
            <NavLink className='navLink' to ="/report" style={getActiveStyle}>Reports</NavLink>
        </nav>
    </div>
  )
}

export default Header