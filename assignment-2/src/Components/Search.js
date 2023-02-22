import React from 'react'
import movieList from './Movies'
const searchBarStyle ={
    outline: 'none',
    borderColor: 'transparent',
    padding: '10px',
    width: '90%',
    borderRadius: '180px'
}
function Search() {
  return (
    <div>
        <input key={movieList.id}
         style={searchBarStyle} 
         type='textarea' 
         placeholder='Search'
         onChange={}
         />
      </div>
  )
}

export default Search
