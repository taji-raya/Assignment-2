import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//https://api.themoviedb.org/3/search/movie?api_key=8b8f208cf321ce6c5f01d462798b3b33

function Search({ setQuery }) {
    const navigate = useNavigate();
    return (

        <form >
            <div className='searchAndSubmit'>
                <input
                    onChange={(event) => {
                        setQuery(event.target.value)
                    }
                    }
                    className='headerSearchBarStyle'
                    type='textarea'
                    placeholder='Search'
                />
                <div>
                    <input type='submit' value='Search' className='submitBtn' onClick={() => {
                        navigate('/SearchResult');
                    }} />
                </div>
            </div>
        </form >

    )
}

export default Search
