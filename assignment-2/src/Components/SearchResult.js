import { MotionValue } from 'framer-motion';
import React from 'react'
import { useParams } from 'react-router-dom'

function SearchResult() {
  const {movieName} = useParams();
  return (
    <div>
      <h1>{movieName}</h1>
      
    </div>
  )
}

export default SearchResult
