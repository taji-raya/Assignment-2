import React from 'react'
import Search from './Search'
import { useState } from 'react';

function Header() {
  const [movie, setMovie] = useState([]);
  useState(() => {
    const movieDB = () => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=8b8f208cf321ce6c5f01d462798b3b33')
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.results)
        });
    }
    movieDB();
  },
    [])
  return (
    <>
      <div className='headerContainer'>
        <div className='backgroundImage'>
          <div>
            <h1 className='heading'>Welcome!</h1>
            <p className='sentence'>Millions of movies, TV shows and people to discover. Explore now.</p>
          </div>
          <div>
            <Search data={movie} />

          </div>
          <p>Test</p>
        </div>

      </div>

    </>
  )
}

export default Header
