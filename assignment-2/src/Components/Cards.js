import React from 'react'
import {motion} from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import MenuButton from './MenuButton'

function Cards(props) {
    return (
             <motion.div key={props.id}>
            <MenuButton/>
            <img 
            className='contentImage' 
            src={`https://image.tmdb.org/t/p/w500/${props.img}`} 
            alt='' 
            />
            
            <h6>{props.title}</h6>
        </motion.div>
       
    )
}

export default Cards
