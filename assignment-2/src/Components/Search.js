import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//https://api.themoviedb.org/3/search/movie?api_key=8b8f208cf321ce6c5f01d462798b3b33

function Search(setMovie) {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    async function search(e) {
        e.preventDefault();
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        }

        fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=8b8f208cf321ce6c5f01d462798b3b33`,
            requestOptions
        )
            .then((result) => result.json())
            .then((data) => {
                { setMovie(data.results) }
            }
                ,);
        if (!query) { alert('Please enter a movie name'); }
        else {
            navigate('/SearchResult');
        }
        console.log(query);

    };

    return (

        <form >
            <div className='searchAndSubmit'>
                <input
                    onChange={(event) => {
                        event.preventDefault();
                        setQuery(event.target.value)
                    }
                    }
                    className='headerSearchBarStyle'
                    type='textarea'
                    placeholder='Search'
                />
                <div>
                    <input type='submit' value='Search' className='submitBtn' onClick={search} />
                </div>
            </div>
        </form >

    )
}

export default Search
