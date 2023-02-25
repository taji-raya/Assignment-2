import React from 'react'
import { useState } from 'react'
import SubmitButton from './SubmitButton'

function Search({isNavbar}) {
    const [query,setQuery] = useState("")
    console.log(query);
    return (
    <div className='searchAndSubmit'>
        <input
        className= 'headerSearchBarStyle'
         type='textarea' 
         placeholder='Search'
         onChange={(e)=> setQuery(e.target.value)}
         />
        
         <SubmitButton/>
         
      </div>
  )
}

export default Search
