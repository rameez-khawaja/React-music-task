import React from "react";
import { Link } from 'react-router-dom'

function Headers(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
        </nav>
    )
}

export default Headers;

