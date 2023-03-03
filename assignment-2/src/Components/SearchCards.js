import React from 'react'
import { Link } from 'react-router-dom'
function SearchCards(props) {
    return (
        <>
            <div className='searchContainer'>
                <div className='innerSearchContainer'>
                    <div className='searchResultCards'>
                        <div className='searchResultCardsImage'>
                            Image goes here
                        </div>

                        <div className='searchResultCardsContent'>
                            <h4>Movie Name</h4>
                            <p>Overview</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

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

export default SearchCards
