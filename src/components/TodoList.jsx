// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addTodo, getTodo } from "../redux/actions/todoAction"

function TodoList(){
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
            <form style={{display: "flex", justifyContent: "center", margin: "10px 0px"}}>
                <input type="text" placeholder="What to do" style={{width:"300px"}} />
                <button style={{cursor:"pointer", backgroundColor: "blue", color: "white", border: "none", width: "50px", height: "40px"}}><b>Add</b></button>
                {/* <button onClick={() => reset()}>reset</button> */}
            </form>
            <div style={{display: "flex", justifyContent: "center", gap: "10px", margin: "10px"}}>
                <button style={{cursor:"pointer", width: "90px", height: "30px", borderRadius: "10px"}}>All</button>
                <button style={{cursor:"pointer", width: "90px", height: "30px", borderRadius: "10px"}}>Active</button>
                <button style={{cursor:"pointer", width: "90px", height: "30px", borderRadius: "10px"}}>Completed</button>
            </div>

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