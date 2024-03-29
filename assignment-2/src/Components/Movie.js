import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './Footer'
import { FaHeart, FaList } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMovie } from '../Redux/Actions/MovieActions';
function Movie() {
    const movie = useSelector((state) => state.movie);
    const { movieID } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        const getMovie = () => {
            fetch(
                `https://api.themoviedb.org/3/movie/${movieID}?api_key=8b8f208cf321ce6c5f01d462798b3b33&language=en-US`)
                .then((res) => res.json())
                .then((data) => {
                    dispatch(selectedMovie(data));
                }
                );
        }
        getMovie();
    },
        [movieID, dispatch])

    return (
        <>
            <div className='divider'></div>
            <div className='infoContainer'>
                <div className='imageContainer'>
                    <div className='bgImage'>ddd</div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt=''
                    />
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
