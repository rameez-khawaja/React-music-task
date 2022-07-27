import React, { createContext, useState } from 'react'

const songData = [
    {name: "Gasolina", releaseDate: "2010", id: 1},
    {name: "Timber", releaseDate: "2013", id: 2},
    {name: "Give Me Everything", releaseDate: "2011", id: 3}
]
export const SongContext = createContext();
export const SongProvider = (props) => {
    const [songDetails, setSongDetails] = useState(songData);
    return (
        <SongContext.Provider value={[songDetails, setSongDetails]}>
            {props.children}
        </SongContext.Provider>
    )
}
