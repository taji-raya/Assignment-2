import { useState, useEffect } from 'react'
import Cards from './Cards';
import Switch from './Switch';
//https://api.themoviedb.org/3/movie/popular/550?api_key=8b8f208cf321ce6c5f01d462798b3b33

function PopularMovies() {

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const movieDB = () => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=8b8f208cf321ce6c5f01d462798b3b33')
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.results)
        },);
    }
    movieDB();
  },
    [])
  return (
    <>
      <div className='popularMovies'>
        <div className='switchContainer'>
          <h4>Trending</h4>
          <div className='switchContent'>
            <Switch />
          </div>

        </div>
      </div>
      <div className='carousel'>
        <div className='innerCarousel'>
          {movie.map((movieList) => (
            <div key={movieList.id} className='item'>
              <Cards
                id={movieList.id}
                title={movieList.title}
                img={movieList.poster_path}
                release_date={movieList.release_date}
                vote_average={movieList.vote_average}
              />
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default PopularMovies
