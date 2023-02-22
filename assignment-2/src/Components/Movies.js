import { useState, useEffect } from 'react'
import Search from './Search';
import query from './Search';
//https://api.themoviedb.org/3/movie/550?api_key=8b8f208cf321ce6c5f01d462798b3b33
//https://fakestoreapi.com/products
//.filter((movieList) => movieList.title.toLowerCase().includes(query))
function Movies() {
  const [movie, setMovie] = useState([]);
  console.log()
  useEffect(() => {
    const movieDB = async () => {
      //wait till u get the data
      const response = await fetch('https://fakestoreapi.com/products');
  
      //convert response into json and save it in a constant named jsonData
      const jsonData = await response.json();
  
      setMovie(jsonData);
    }
    movieDB();

  }, 
  [])
  return (
    <>
      <div className='popularMovies'>
        <h4>New Movies</h4>
      </div>
      <div className='moviesContainer'>
        {movie.filter((movieList) => movieList.title.toLowerCase().includes('gold')).map((movieList) => (
          <div  key = {movieList.id}className='box'>
            <div key = {movieList.id}className='content'>
              <img className='contentImage'src={movieList.image} alt=''/>
              <h6>{movieList.title}</h6>
              <p>{movieList.description}</p>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default Movies
