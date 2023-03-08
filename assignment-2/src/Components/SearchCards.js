import React from 'react'
import { Link } from 'react-router-dom'
function SearchCards({ movie }) {
    return (
        <>
            <div key={movie.id} className='searchContainer'>
                <div className='innerSearchContainer'>
                    <div className='searchResultCards'>
                        <Link to={`/Movie/${movie.id}`}>
                            <div className='searchResultCardsImage'>
                                <img
                                    className='contentImage'
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt=''
                                />
                            </div>
                        </Link>
                        <div className='searchResultCardsContent'>
                            <Link to={`/Movie/${movie.id}`}>

                                <h4>{movie.title}</h4>
                            </Link>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCards
