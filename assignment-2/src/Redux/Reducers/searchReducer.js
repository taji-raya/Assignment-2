import { ActionTypes } from "../Constants/action-types"
const initialState = {
    text: ' ', //text entered
    movies: [], //returned results
    movie: [] //api info
}
export const searchReducer = ((state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SEARCH_MOVIE:
            return {
                ...state,
                text: payload,
            }
        case ActionTypes.FETCH_MOVIES:
            return {
                ...state,
                movies: payload,
            }
        default:
            return state
    }
})