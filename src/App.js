import React from 'react'

import { Details, Songs } from './components'

import '../public/default.css'

const App = () => {

    const songDetails = [
        {name: "Gasolina", releaseDate: "2010"},
        {name: "Timber", releaseDate: "2013"},
        {name: "Give Me Everything", releaseDate: "2011"}
    ]

    return <>
            <Details/ >
            {songDetails.map(p => <Songs name={p.name} releaseDate={p.releaseDate}/>)}
           </>
}

export default App;
