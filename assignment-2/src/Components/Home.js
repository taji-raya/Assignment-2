import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Movies from './PopularMovies';
import Scroll from './Scroll';
function Home() {
    return (
        <>
            <Header />
            <Movies />
            <Footer/>
            <Scroll/>
        </>
    )
}

export default Home
