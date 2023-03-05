import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Movies from './PopularMovies';
function Home({ setQuery }) {
    return (
        <>
            <Header setQuery={setQuery} />
            <Movies />
            <Footer />
        </>
    )
}

export default Home
