import { useState } from 'react'
import { motion } from 'framer-motion'
import Cards from './Cards';

//https://api.themoviedb.org/3/movie/popular/550?api_key=8b8f208cf321ce6c5f01d462798b3b33
//.filter((movieList) => movieList.title.toLowerCase().includes(query))
function PopularMovies() {
  const [movie, setMovie] = useState([]);
  useState(() => {
    const movieDB = async () => {
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
      <div className='popularMovies'>
        <h4>New Movies</h4>
      </div>
      <motion.div className='carousel'>
        <motion.div drag = 'x' className='innerCarousel'>
          {movie.map((movieList) => (
            <motion.div key={movieList.id} className='item'>
              <Cards
                id={movieList.id}
                title={movieList.title}
                img={movieList.poster_path}
              />
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </>
  )
}

export default PopularMovies
