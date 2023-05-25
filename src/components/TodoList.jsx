// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addTodo, getTodo } from "../redux/actions/todoAction"

import { useState } from "react"
import { ACTIVE, ALL, COMPLETED, active, addTodoList, all, checkboxTodoList, completed, deleteTodoList } from "../redux/actions/todoAction"
import { useDispatch, useSelector } from "react-redux"

function TodoList(){
    const [newTodoList, setNewTodoList] = useState("")
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)
    const filter = useSelector((state) => state.filter)


    const handleAdd = (e) => {
        e.preventDefault()
        if (newTodoList.trim() !== ""){
            dispatch(
                addTodoList({
                    id : Math.floor(Math.random() * 100),
                    title : newTodoList,
                    isDone : false
                })
            )
        }
    }

    const handleInput = (e) => {
        setNewTodoList(e.target.value)
    }

    const handleAll = () => {
        dispatch(all())
    }

    const handleActive = () => {
        dispatch(active())
    }

    const handleCompleted = () => {
        dispatch(completed())
    }

    const handleCheckbox = (id) => {
        dispatch(checkboxTodoList(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodoList(id))
    }

    // const dispatch = useDispatch()
    // const {todos, isLoading} = useSelector(state => state.todoReducer)

    // const [inputNewTodo, setInputNewTodo] = useState("")

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     let newTodoList = {
    //         title: inputNewTodo,
    //         isDone: false
    //     }
    //     setInputNewTodo("")

    //     console.log(newTodoList)

    //     dispatch(addTodo(newTodoList))
    // }


    // const reset = () => {
    //     setInputNewTodo("")
    // }

    

    // useEffect(() => {
    //     dispatch(getTodo())
    // }, [])

    return(
        <>
            <h1 style={{textAlign : "center"}}>What's the plan for today</h1>
            <form onChange={handleInput} value={newTodoList} style={{display: "flex", justifyContent: "center", margin: "10px 0px"}}>
                <input type="text" placeholder="What to do" style={{width:"300px"}} />
                <button onClick={handleAdd} style={{cursor:"pointer", backgroundColor: "blue", color: "white", border: "none", width: "50px", height: "40px"}}><b>Add</b></button>
                {/* <button onClick={() => reset()}>reset</button> */}
            </form>
            <div style={{display: "flex", justifyContent: "center", gap: "10px", margin: "10px"}}>
                <button onClick={handleAll} style={{cursor:"pointer", width: "90px", height: "30px", borderRadius: "10px"}}>All</button>
                <button onClick={handleActive} style={{cursor:"pointer", width: "90px", height: "30px", borderRadius: "10px"}}>Active</button>
                <button onClick={handleCompleted} style={{cursor:"pointer", width: "90px", height: "30px", borderRadius: "10px"}}>Completed</button>
            </div>

            {todos.filter((item) =>{
                if(filter === "ACTIVE"){
                    return !item.isDone
                }else if(filter == "COMPLETED"){
                    return item.isDone
                }else{
                    return true
                }
            }).map((item) => (
                <div key={item.id} style={{display: "flex", justifyContent: "space-between", padding: "5px 130px"}}>
                    <div >
                        <input onChange={() => handleCheckbox(item.id)} checked={item.isDone} type="checkbox" style={{cursor:"pointer"}}/>
                        <span>{item.title} </span>
                    </div>
                    <div >
                        <button style={{cursor:"pointer"}}>edit</button>
                        <button onClick={() => handleDelete(item.id)} style={{cursor:"pointer"}}>delete</button>
                    </div>
                </div>
            ))}

            {/* {isLoading && <span style={{display: "flex", justifyContent: "center"}}>Your Todo List...</span>}

            {todos.length > 0 && todos.map(item => (
                <div key={item.id} style={{display: "flex", justifyContent: "space-between", padding: "5px 130px"}}>
                    <div >
                        <input id="check" type="checkbox" style={{cursor:"pointer"}}/>
                        <span>{item.title} </span>
                    </div>
                    <div >
                        <button style={{cursor:"pointer"}}>edit</button>
                        <button style={{cursor:"pointer"}}>delete</button>
                    </div>
                </div>
            ))} */}
        </>
    )
}

export default TodoList