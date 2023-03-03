import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import { FaHeart, FaList } from 'react-icons/fa';

function Movie() {
    const [movie, setMovie] = useState({});
    const { movieID } = useParams();
    useEffect(() => {
        getMovie();
    })
    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8b8f208cf321ce6c5f01d462798b3b33')
            .then((res) => res.json())
            .then((data) => {
                const newMovie = data.results.find((movie) => movie.id === parseInt(movieID));
                setMovie(newMovie)
            });
    }
    return (
        <>
            <div className='divider'></div>
            <div className='infoContainer'>
                <div className='imageContainer'>
                    <img
                        className='innerContentImage'
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt=''
                    />
                </div>
                <div className='infoInnerContainer'>
                    <h1>{movie.title}</h1>
                    <div className='btnContainer'>
                        <button id='img1'>{movie.vote_average}</button>
                        <button id='img2'><FaHeart /> </button>
                        <button id='img3'><FaList /></button>
                    </div>
                    <h4>Overview</h4>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Movie
