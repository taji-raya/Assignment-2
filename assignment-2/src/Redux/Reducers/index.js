import { combineReducers } from 'redux'
import { movieReducer, selectedMovieReducer } from './movieReducer';
import { searchReducer } from './searchReducer'
const reducers = combineReducers({
    popularMovies: movieReducer,
    movie: selectedMovieReducer,
    movies: searchReducer,
});
export default reducers;

