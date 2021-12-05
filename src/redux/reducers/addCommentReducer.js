import * as actionTypes from "../types";

const initialState = {
    comment: "",
    error: null,
};

function addCommentReducer(state = initialState, action){
switch (action.type){
    case actionTypes.ADD_COMMENT:
        return {
            comment: action.payload.comment,
            error: null,
        };
        default:
            return {
                ...state,
            };
    }
}

export default addCommentReducer;