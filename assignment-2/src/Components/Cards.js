import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'

function Cards(props) {
    return (
        <motion.div key={props.id}>
            <MenuButton />
            <Link to={`/Movie/${props.title}`}>
                <img
                    className='contentImage'
                    src={`https://image.tmdb.org/t/p/w500/${props.img}`}
                    alt=''
                />
            </Link>
            <Link to={`/Movie/${props.title}`}><h6>{props.title}</h6></Link>
            <p>{props.overview}</p>
        </motion.div>

    )
}

export default Cards
