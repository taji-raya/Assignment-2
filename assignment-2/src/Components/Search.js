import React from 'react'
import { useState } from 'react'
import searchCSS from './searchBarStyle.module.css'

function Search({isNavbar}) {
    const [query,setQuery] = useState("")
    return (
    <div>
        <input
        className={isNavbar ? searchCSS.navbarSearchBarStyle : searchCSS.headerSearchBarStyle}
         type='textarea' 
         placeholder='Search'
         onChange={(e)=> setQuery(e.target.value)}
         />
         
      </div>
  )
}

export default Search
