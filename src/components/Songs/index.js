import React, { useState } from 'react';
import SongItem from '../SongItem';

const Songs = ({songDetails, setSongDetails}) => {
    
    return <ul>
            {songDetails.map(item => {
                
                return <SongItem songDetails={songDetails} setSongDetails={setSongDetails} item={item} />
            })}
           </ul>
}

export default Songs;
