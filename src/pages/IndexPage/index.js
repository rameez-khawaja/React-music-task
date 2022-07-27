import React, { useState } from 'react'
import { Details, Songs, InputForm, Socials } from '../../components'

import '../../../public/default.css'

const App = () => {
    const array = [
        {name: "Gasolina", releaseDate: "2010", id: Math.random()*1000},
        {name: "Timber", releaseDate: "2013", id: Math.random()*1000},
        {name: "Give Me Everything", releaseDate: "2011", id: Math.random()*1000}
    ]
    const [songDetails, setSongDetails] = useState(array)
    const [titleValue, setTitleValue] = useState('')
    const [yearValue, setYearValue] = useState('')
    
    return <>
            <Details />
            <InputForm songDetails={songDetails} setSongDetails={setSongDetails} titleValue={titleValue} setTitleValue={setTitleValue} yearValue={yearValue} setYearValue={setYearValue} />
            <Songs songDetails={songDetails} setSongDetails={setSongDetails}/>
            <Socials />
           </>
}

export default App;
