import React from 'react'
import Search from './Search'

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
            <Search />
          </div>
        </div>

      </div>

    </>
  )
}

export default Header
