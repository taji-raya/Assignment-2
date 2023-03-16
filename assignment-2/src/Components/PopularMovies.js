import { useEffect } from 'react'
import Cards from './Cards';
import Switch from './Switch';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../Redux/Actions/MovieActions';
function PopularMovies() {
  const movies = useSelector((state) => state.popularMovies.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    const movieDB = () => {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=8b8f208cf321ce6c5f01d462798b3b33')
        .then((res) => res.json())
        .then((data) => {
          dispatch(setMovies(data.results))
        },);
    }
    movieDB();
  },
    [dispatch])
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
          {movies.map((movieList) => (
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
