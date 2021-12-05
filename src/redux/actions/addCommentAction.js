import * as actionTypes from "../types";

export const addComment = (comment) => async (dispatch) => {
    try {
        await dispatch({ 
            type: actionTypes.ADD_COMMENT, 
            payload: { comment },
         });
    } catch (err) {
        await dispatch({ type: actionTypes.ON_ERROR, payload: err});
    }
}