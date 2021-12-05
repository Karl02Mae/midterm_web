import * as actionTypes from "../types";



function createStudent(id, name, gender, birthday, address, nickname, skills) {
    return { id, name, gender, birthday, address, nickname, skills };
}
const intialState = [
    createStudent(1,'Karl Samelo','male','09/22/1999','Bulacan','Karl','Web Developer'),
    createStudent(2,'Sara Patatas','female','09/22/1999','Baliwag','Sara','Web Developer'),
    createStudent(3,'Junnie Adriano','male','09/22/1999','Baliwag','Junjun','Web Developer'),
    createStudent(4,'Junnie Adriano','male','09/22/1999','Baliwag','Junjun','Web Developer'),
    createStudent(5,'Junnie Adriano','male','09/22/1999','Baliwag','Junjun','Web Developer'),
];
       

function studentInfoReducer(state = intialState, action){
switch (action.type){
    case actionTypes.SET_STUDENT_INFO:
        return {
            ...state,
            ...action.payload,
        };
        default:
            return {
                ...state,
            };
    }
}

export default studentInfoReducer;