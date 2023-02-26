import React from 'react'
import NavSearch from './NavSearch';
import NavigationSearch from './NavigationSearch'
import { Link } from 'react-router-dom';
import {useState} from 'react'
const Navbar = () => {
  
  return (
    <>
      <div className='navbarContainer'>
        <div className='navbarContent'>
          <Link to = "./">
          <img className='logo' alt=' Logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' />
          </Link>
            <ul className='listStyle'>
              <li className='eng'>EN </li>
              <NavSearch/>
             
            </ul>
        </div>
      </div>




    </>

  )
}

export default Navbar
