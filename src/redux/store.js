import { createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

const store = createStore(todoReducer)

export default store

// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";
// import todoReducer from "./reducers/todoReducer";

// const allReducer = combineReducers({
//     todoReducer 
// })

// const store = createStore(allReducer, applyMiddleware(thunk))

// export default store