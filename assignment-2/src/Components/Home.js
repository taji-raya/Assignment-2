import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Movies from './PopularMovies';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <Header />
            <Movies />
            <Footer/>
        </>
    )
}

export default Home
