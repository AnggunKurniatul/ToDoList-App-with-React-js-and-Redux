import { useState } from "react"
import { active, addTodoList, all, checkboxTodoList, completed, deleteTodoList, editTodoList } from "../redux/actions/todoAction"
import { useDispatch, useSelector } from "react-redux"

function TodoList(){
    const [newTodoList, setNewTodoList] = useState("")
    const [editId, setEditId] = useState(null)
    const [editTitle, setEditTitle] = useState("")
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

    const handleInputEdit = (e) => {
        setEditTitle(e.target.value)
    }

    const handleEdit = (item) => {
        setEditId(item.id)
        setEditTitle(item.title)
    }

    const updateTodoList = () => {
        if(editTitle.trim() !== ""){
            dispatch(
                editTodoList({
                    id : editId,
                    title : editTitle
                })
            )
            setEditId(null)
            setEditTitle("")
        }
    }

    return(
        <>
            <h1>What's the plan for today</h1>
            <form onChange={handleInput} value={newTodoList} >
                <input type="text" placeholder="What to do" />
                <button onClick={handleAdd} ><b>Add</b></button>
            </form>
            <div>
                <button onClick={handleAll} >All</button>
                <button onClick={handleActive} >Active</button>
                <button onClick={handleCompleted} >Completed</button>
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
                <div key={item.id}>
                    
                        <input onChange={() => handleCheckbox(item.id)} checked={item.isDone} type="checkbox"/>
                        {editId === item.id ? (
                            <div>
                                <input type="text" value={editTitle} onChange={handleInputEdit} />
                                <button onClick={updateTodoList}>Update</button>
                            </div>
                        ) : (
                            <div >
                                <span>{item.title} </span>
                                <div>
                                    <button onClick={() => handleEdit(item)} >edit</button>
                                    <button onClick={() => handleDelete(item.id)} >delete</button>
                                </div>
                            </div>
                        )}
                </div>
            ))}
        </>
    )
}

export default TodoList