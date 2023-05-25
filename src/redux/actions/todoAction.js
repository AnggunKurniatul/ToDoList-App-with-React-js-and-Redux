export const ADD_TODO_LIST = "ADD_TODO_LIST"
export const ALL = "ALL"
export const ACTIVE = "ACTIVE"
export const COMPLETED = "COMPLETED"

export const addTodoList = (item) => ({
    type : ADD_TODO_LIST,
    payload : item
})

export const all = () => ({
    type : ALL
})

export const active = () => ({
    type : ACTIVE
})

export const completed = () => ({
    type : COMPLETED
})

// import axios from "axios";

// export const FETCHING_API = 'FETCHING_API'
// export const GET_TODO_SUCCESS = 'GET_TODO_SUCCES'

// const fetchingApi = () => {
//     return{
//         type: FETCHING_API
//     }
// }

// const getTodoSuccess = (payload) => {
//     return{
//         type: GET_TODO_SUCCESS,
//         payload
//     }
// }

// export const getTodo = () => {
//     return async (dispatch) => {
//         dispatch(fetchingApi())

//         const linkApi = "https://6453e133c18adbbdfeaa2b38.mockapi.io/api/v1/todo"
//         const result = await axios(linkApi)

//         dispatch(getTodoSuccess(result.data))
//     }
// }

// export const addTodo = (newTodoList) => async (dispatch) => {
//     const linkApi = "https://6453e133c18adbbdfeaa2b38.mockapi.io/api/v1/todo"
//     await axios.post(linkApi, newTodoList)
    
//     dispatch(getTodo())
// }