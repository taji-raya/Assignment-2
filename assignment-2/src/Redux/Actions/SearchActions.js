import { ActionTypes } from "../Constants/action-types"

export const searchMovie = text => dispatch => {
    dispatch({
        type: ActionTypes.SEARCH_MOVIE,
        payload: text
    });

};
export const fetchMovies = text => dispatch => {
    var requestOptions = {
        method: "GET",
        redirect: "follow",
    }
    fetch(
        `https://api.themoviedb.org/3/search/movie?query=${text}&api_key=8b8f208cf321ce6c5f01d462798b3b33`,
        requestOptions
    )
        .then((response) => dispatch({
            type: ActionTypes.FETCH_MOVIES,
            payload: response
        }))
        .catch(err => console.log(err))
};