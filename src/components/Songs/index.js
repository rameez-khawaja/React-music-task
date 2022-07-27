import React, { useState, useContext } from 'react';
import SongItem from '../SongItem';
import { SongContext } from '../../pages/IndexPage/IndexPageContext'

const Songs = ({}) => {
    const [songDetails, setSongDetails] = useContext(SongContext)
    return <ul>
            {songDetails.map(item => {
                
                return <SongItem songDetails={songDetails} setSongDetails={setSongDetails} item={item} />
            })}
           </ul>
}

export default Songs;
