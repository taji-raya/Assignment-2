import React from 'react'
import Search from './Search'
import searchCSS from './searchBarStyle.module.css'

function Header() {
  return (
    <>
    <div className='headerContainer'>
      <div className='backgroundImage'> 
      <div>
         <h1 className='heading'>Welcome!</h1>
         <p className='sentence'>Millions of movies, TV shows and people to discover. Explore now.</p>
      </div>
      <div>
      <Search isNavbar={false}/>
      <input type='submit' value='Search' className='submitBtn'/>
      </div>
  
      </div>
      
    </div>

    </>
  )
}

export default Header
