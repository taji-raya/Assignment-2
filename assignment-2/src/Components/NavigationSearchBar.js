import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function NavigationSearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;

    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter);
    }
  }
  return (
    <div>
      <div className='navSearchContainer'>
        <div className='searchInput' onChange={handleFilter} >
          <input type='text' />
        </div>
        {filteredData.length !== 0 && (
          <div className='dataResult'>
            {filteredData.slice(0, 7).map((value, key) => {
              return <Link to="/SearchResult" className="dataItem">
                <ul>
                  <li>
                    {value.title}
                  </li>
                </ul>
              </Link>

            })}
          </div>
        )}
      </div>

    </div>

  )
}

export default NavigationSearchBar
