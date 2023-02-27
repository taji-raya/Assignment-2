import React, { useState } from 'react'
import NavigationSearchBar from './NavigationSearchBar'


function NavigationSearchButton() {
  const [open, setOpen] = useState(false);

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
      <div className='navBarSearchContainer' />
      <button className='navBarSearch' onClick={() => setOpen(!open)}></button>
      {open && (
        <NavigationSearchBar data={movie} onClick={() => setOpen(false)} />
      )

      }
    </>
  )

}
export default NavigationSearchButton
