import React from 'react'
import { useParams, Link } from 'react-router-dom';
import SearchCards from './SearchCards';

function SearchResult({ movie }) {
  return (
    <div>
      <h1>Search Results</h1>
      {/* <div>
        <h1>{movie?.map((movieList) => (
          <div key={movieList.id} className='item'>
            <h1>{movieList.title}</h1>
          </div>
        ))}
        </h1>
      </div> */}
      <SearchCards />

    </div>
  )
}

export default SearchResult
