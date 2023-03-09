import { useNavigate } from 'react-router-dom';
import { searchMovie, fetchMovies } from '../Redux/Actions/SearchActions';
import { connect } from 'react-redux';
//https://api.themoviedb.org/3/search/movie?api_key=8b8f208cf321ce6c5f01d462798b3b33

function Search() {
    const navigate = useNavigate();
    const onChangeFunction = e => {
        searchMovie(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault();
        fetchMovies(mapStateToProps.text)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='searchAndSubmit'>
                <input
                    onChange={onChangeFunction}
                    className='headerSearchBarStyle'
                    type='textarea'
                    placeholder='Search'
                />
                <div>
                    <input type='submit' value='Search' className='submitBtn' onClick={() => { navigate('/SearchResult'); }}
                    />
                </div>
            </div>
        </form >

    )
}
const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie, fetchMovies })(Search)
