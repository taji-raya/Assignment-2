import React from 'react'
import { useState,useEffect } from 'react'
import SubmitButton from './SubmitButton'
import { Link } from 'react-router-dom'

function Search() {
    const [query,setQuery] = useState(false);


    const searchFunction = () =>{
      console.log(query)
    
    }
   
    return (
    <div className='searchAndSubmit'>
        <input
        className= 'headerSearchBarStyle'
         type='textarea' 
         placeholder='Search'
         onChange={(e)=> setQuery(e.target.value)}
         />
        
         <SubmitButton onPress = {searchFunction}/>
         
      </div>
  )
}

export default Search
