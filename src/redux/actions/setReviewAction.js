import * as actionTypes from "../types";

export const setReview = (value) => async (dispatch) => {
    try {
        await dispatch({type: actionTypes.OVERALL_RATING, payload: value });
    } catch (err) {
        console.error(err);
    }
};
