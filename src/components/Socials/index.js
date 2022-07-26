import React, { useEffect, useState } from 'react'

export default function Socials() {

    const [socials, setSocials] = useState([])

    async function getSocials() {
        try{
            const fetchAPI = "https://rest.bandsintown.com/artists/pitbull?app_id=123"
            const response = await fetch(fetchAPI)
            const data = await response.json()
            const links = data.links
            setSocials(links)
        } catch (err) {
            console.log(err)
        }
        }

        useEffect(() => {
            getSocials();
        }, [])

  return (
    <div>
        <ul>
        {socials.map(l => <li><a href={l.url}>{l.type}</a></li>)}
        </ul>
    </div>
  )
}
