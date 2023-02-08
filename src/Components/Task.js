export const Task = (props) => {
    return (
        
        <div>
            <label style={{ backgroundColor: props.completed ? "green" : "" , textDecoration : props.completed ? "line-through": "none"}}>{props.taskName}</label>
            {/* <h5>{task.taskName}</h5> */}
            <button onClick={()=> props.completeTask(props.id)} >✅</button>
            <button onClick={() => props.deleteTask(props.id)}>❌</button>
        </div>
        
    )
}