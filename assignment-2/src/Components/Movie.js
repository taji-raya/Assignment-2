import React from 'react'
import { Link, useParams } from 'react-router-dom'


function Movie() {
    const { movieID } = useParams();
    return (
        <div>
            <h1>{movieID}</h1>
            <p> 
                Overview should go here but i dont know where to get it from

            </p>
           
            <Link to = '/'> 
            <button> Back </button>
            </Link>

        </div>
    )
}

export default Movie
