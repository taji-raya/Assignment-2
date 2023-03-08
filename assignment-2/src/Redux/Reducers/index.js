import { combineReducers } from 'redux'
import { movieReducer, searchedMovieReducer, selectedMovieReducer } from './movieReducer'
const reducers = combineReducers({
    popularMovies: movieReducer,
    movie: selectedMovieReducer,
    searchedQuery: searchedMovieReducer,
});
export default reducers;

