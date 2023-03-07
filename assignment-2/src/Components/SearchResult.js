import React, { useEffect, useState } from 'react'
import SearchCards from './SearchCards';

function SearchResult({ query }) {
  const [movies, setMovies] = useState();
  useEffect(() => {
    function raya() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      }

      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=8b8f208cf321ce6c5f01d462798b3b33`,
        requestOptions
      )
        .then((result) => result.json())
        .then((data) => {
          { setMovies(data.results) }
        },);
    }
    raya();

  }, [query]);
  return (
    <div>
      {movies?.map((movie) => <SearchCards movie={movie} />)}
    </div >
  )
}

export default SearchResult
