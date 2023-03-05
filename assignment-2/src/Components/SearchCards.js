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
            {/* <div key={props.id} className='searchContainer'>
    <div key={props.id} className='innerSearchContainer'>
        <div key={props.id} className='searchResultCards'>

            <Link to={`/Movie/${props.id}`}>
                <div key={props.id} className='searchResultCardsImage'>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${props.img}`}
                        alt=''
                    />
                </div>
            </Link>
            <div key={props.id} className='searchResultCardsContent'>
                <link to={`/Movie/${props.id}`}>
                    <h4>Movie Name: {props.title}</h4>
                </link>
                <p>Overview</p>
            </div>
        </div>
    </div>
</div> */}

        </>
    )
}

export default SearchCards
