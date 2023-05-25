// import { FETCHING_API, GET_TODO_SUCCESS } from "../actions/todoAction"

// const initialState = {
//     todos: [],
//     isLoading: false
// }

// const todoReducer = (state = initialState, action) => {
//     switch(action.type){
//         case FETCHING_API:
//             return{
//                 ...state,
//                 isLoading: true
//             }
//         case GET_TODO_SUCCESS:
//             return{
//                 isLoading: false,
//                 todos: [...action.payload]
//             }
//         default: return state
//     }
// }

export default todoReducer