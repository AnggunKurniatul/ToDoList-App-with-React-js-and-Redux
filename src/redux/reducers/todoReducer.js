import { ACTIVE, ADD_TODO_LIST, ALL, COMPLETED } from "../actions/todoAction"

const initialState = {
    todos : []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO_LIST:
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case ALL:
            return{
                ...state,
                filter : "ALL"
            }
        case ACTIVE:
            return{
                ...state,
                filter : "ACTIVE"
            }
        case COMPLETED:
            return{
                ...state,
                filter : "COMPLETED"
            }
        default: return state
    }
}

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