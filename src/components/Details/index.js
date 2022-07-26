import React, { useEffect, useState } from 'react';

const Details = () => {

    const [colour, setColour] = useState('white')

    function randomColour(){
        
        let random = `#` + Math.floor(Math.random()*16777215).toString(16)
        setColour(random)
        let h1 = document.querySelector('h1')
        h1.style.color = random

    }

    useEffect(() => {
        const interval = setInterval(() => {
            randomColour()
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    // useEffect(() => {

    //     randomColour()
    // }, 3000)

    return <>
            <h1>Pitbull</h1>
            <h2 role="heading2">Pop</h2>
            <p role="paragraph">Bald singer</p>
           </>
}

export default Details;
