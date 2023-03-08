import { ActionTypes } from "../Constants/action-types"
export const setMovies = (movies) => {
    return {
        type: ActionTypes.SET_MOVIES,
        payload: movies,

    };

};

export const selectedMovie = (movie) => {
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload: movie,

    };

};

export const searchedMovie = (searchedQuery) => {
    return {
        type: ActionTypes.SEARCHED_MOVIE,
        payload: searchedQuery,

    };

};