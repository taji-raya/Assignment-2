import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div>
      Error 404 page not found
      <Link to='/'> Back</Link>
    </div>
  )
}

export default Error
