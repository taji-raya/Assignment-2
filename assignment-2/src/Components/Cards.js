import React from 'react'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'

function Cards(props) {


    return (
        <div key={props.id} className='cardContainer'>
            <div className='menuBtnContainer'>
                <MenuButton />
            </div>

            <Link to={`/Movie/${props.id}`}>
                <img
                    className='contentImage'
                    src={`https://image.tmdb.org/t/p/w500/${props.img}`}
                    alt=''
                />

            </Link>
            <div className='voteAverage'><h4>{props.vote_average}</h4></div>

            <Link to={`/Movie/${props.id}`}><h6>{props.title}</h6></Link>
            <div className='releaseDate'><p>{props.release_date}</p></div>
        </div>

    )
}

export default Cards
