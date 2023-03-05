import React from 'react'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from 'chart.js'

Chartjs.register(
    ArcElement,
    Tooltip,
    Legend
);

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
            <div>
            </div>
            <div className='voteAverage'>
                <h4>{props.vote_average}</h4>



            </div>
            <Link to={`/Movie/${props.id}`}><h6>{props.title}</h6></Link>
        </div>

    )
}

export default Cards
