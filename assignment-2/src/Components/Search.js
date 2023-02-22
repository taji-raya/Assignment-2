import React from 'react'
import movieList from './Movies'
import { useState } from 'react'


function Search() {
    const [query,setQuery] = useState("")
    console.log(query);
    return (
    <div>
        <input key={movieList.id}
         style={searchBarStyle} 
         type='textarea' 
         placeholder='Search'
         onChange={(e)=> setQuery(e.target.value)}

         />
      </div>
  )
}
const searchBarStyle ={
    outline: 'none',
    borderColor: 'transparent',
    padding: '10px',
    width: '90%',
    borderRadius: '180px'
}
export default Search
