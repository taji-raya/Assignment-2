import React from 'react'
import { useState, useEffect } from 'react'
import SubmitButton from './SubmitButton'
import { Link } from 'react-router-dom'

function Search(data) {
    const [query, setQuery] = useState('');

    const searchFunction = () => {
        console.log(query)
    }
    return (
        <div className='searchAndSubmit'>
            <input
                className='headerSearchBarStyle'
                type='textarea'
                placeholder='Search'
                onChange={(e) => {
                setQuery(e.target.value)
                }}
            />
            {/* <div className='input'>
                {data.map((value, key) => {
                    return <Link to="/SearchResult" className="dataItem">
                        <ul>
                            <li>
                                {value.title}
                            </li>
                        </ul>
                    </Link>

                })}
            </div> */}
            <SubmitButton onPress={searchFunction} />

        </div>
    )
}

export default Search
