import React from 'react'

function Cards(props) {
    return (
             <div key={props.id} className='content'>
            <img className='contentImage' src={`https://image.tmdb.org/t/p/w500/${props.img}`} alt='' />
            <h6>{props.title}</h6>
        </div>
       
    )
}

export default Cards
