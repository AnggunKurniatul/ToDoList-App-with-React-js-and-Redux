import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, getTodo } from "../redux/actions/todoAction"

function TodoList(){
    const dispatch = useDispatch()
    const {todos, isLoading} = useSelector(state => state.todoReducer)

    const [inputNewTodo, setInputNewTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        let newTodoList = {
            title: inputNewTodo,
            isDone: false
        }
        setInputNewTodo("")

        console.log(newTodoList)

        dispatch(addTodo(newTodoList))
    }


    // const reset = () => {
    //     setInputNewTodo("")
    // }

    

    useEffect(() => {
        dispatch(getTodo())
    }, [])

    return(
        <>
            <h1>What's the plan for today</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="What to do" value={inputNewTodo} onChange={e => setInputNewTodo(e.target.value)} />
                <button>add</button>
                {/* <button onClick={() => reset()}>reset</button> */}
            </form>

            {isLoading && <span>Your Todo List...</span>}

            {todos.length > 0 && todos.map(item => (
                <div key={item.id}>
                    <input id="check" type="checkbox" />
                    <span>{item.title} </span>
                    <button>edit</button>
                    <button>delete</button>
                </div>
            ))}
        </>
    )
}

export default TodoList