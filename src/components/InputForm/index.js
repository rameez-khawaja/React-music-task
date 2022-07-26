import React from 'react'

export default function InputForm({songDetails, setSongDetails, titleValue, setTitleValue, yearValue, setYearValue}) {
    function titleChange(e) {
        setTitleValue(e.target.value);
    }
    function yearChange(e) {
        setYearValue(e.target.value);
    }
    function updateList(e) {
        e.preventDefault();
        setSongDetails([...songDetails, {name: titleValue, releaseDate: yearValue, id: Math.random()*1000}])
        setTitleValue("")
        setYearValue("")
    }

    return (
        <div>
            <form>
                <input value={titleValue} onChange={titleChange} placeholder='Song Title' />
                <input value={yearValue} onChange={yearChange} placeholder='Release Year' />
                <button onClick={updateList} >Submit</button>
            </form>
        </div>
    )
}
