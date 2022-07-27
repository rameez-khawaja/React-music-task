import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const navigate = useNavigate()

    return (
    <>
    <h1>I am an about page!</h1>
    <button onClick={()=>navigate(-1)}>Go Back Home</button>
    </>
    )

}

export default AboutPage;
