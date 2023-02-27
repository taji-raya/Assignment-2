import React from 'react'
import { useState } from 'react'
import SubmitButton from './SubmitButton'
import { Link } from 'react-router-dom'
import searchResult from './SearchResult'

function Search(data) {

    const [query, setQuery] = useState('');
    const [movie, setMovie] = useState([]);

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log('IT WORKED');
        try {
            fetch('https://api.themoviedb.org/3/search/movie?api_key=8b8f208cf321ce6c5f01d462798b3b33&query${query}')
                .then((res) => res.json())
                .then((data) => {
                    setMovie(data.results);
                    <Link to='/SearchResult' >{data.results}</Link >
                    console.log(data.results)
                });

        } catch (e) {
            console.log(e);
        }
    }
    const changeHandler = (e) => {
        setQuery(e.target.value)

    }
    return (

        <form onSubmit={searchMovie}>
            <div className='searchAndSubmit'>
                <input
                    name='query'
                    value={query}
                    onChange={changeHandler}
                    key={data}
                    className='headerSearchBarStyle'
                    type='textarea'
                    placeholder='Search'

                />
                <SubmitButton />




            </div>
        </form>

    )
}

export default Search
