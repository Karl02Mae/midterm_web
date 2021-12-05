import * as actionTypes from "../types";

const initialState = {
    teamwork: 0,
    creativity: 0,
    adaptibility: 0,
    leadership: 0,
    persuasion: 0,
    value: 0,
};

function setReviewReducer(state = initialState, action){
switch (action.type){
    case actionTypes.OVERALL_RATING:
        return {
            ...state,
        };
        default:
            return {
                ...state,
            };
    }
}

export default setReviewReducer;