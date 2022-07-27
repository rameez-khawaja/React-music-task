import React, { useState, useContext } from 'react'
import { Details, Songs, InputForm, Socials } from '../../components'
import { SongContext } from './IndexPageContext'

import '../../../public/default.css'

const App = () => {
    // const [songDetails, setSongDetails] = useState([])
    const [titleValue, setTitleValue] = useState('')
    const [yearValue, setYearValue] = useState('')
    
    return <>
            <Details />
            {/* <InputForm songDetails={songDetails} setSongDetails={setSongDetails} titleValue={titleValue} setTitleValue={setTitleValue} yearValue={yearValue} setYearValue={setYearValue} /> */}
            <Songs />
            <Socials />
           </>
}

export default App;
