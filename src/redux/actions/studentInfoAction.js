import * as actionTypes from "../types";

export const setStudentInfos = () => async (dispatch) => {
    try {
        await dispatch({ 
            type: actionTypes.SET_STUDENT_INFO, 
            payload: 'set_student_info',
         });
    } catch (err) {
        await dispatch({ type: actionTypes.ON_ERROR, payload: err});
    }
};