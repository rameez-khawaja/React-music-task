import React from "react";
import { useNavigate, Link } from 'react-router-dom'

function Headers(){

    const navigate = useNavigate();

    return(
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link> */}
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/about")}>About</button>
            <button onClick={()=>navigate("/users")}>Users</button>
        </nav>
    )
}

export default Headers;

