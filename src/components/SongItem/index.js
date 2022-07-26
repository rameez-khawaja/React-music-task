import React from 'react'

export default function SongItem({songDetails, setSongDetails, item}) {
    
    function deleteSong(e){
        e.preventDefault()
        setSongDetails(songDetails.filter((el) => {
            return item.id !== el.id
        }))
        
    }
  return (
    <>
    <li>{item.name} ({item.releaseDate})</li>
    <button onClick={deleteSong}>delete</button>
    </>
  )
}
