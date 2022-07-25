import React, { useState } from 'react';

const Songs = ({name, releaseDate}) => {
    return <>
            <li>{name} ({releaseDate})</li>
           </>
}

export default Songs;
