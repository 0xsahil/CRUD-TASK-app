import { useState } from 'react';
import './App.css';
import { Task } from './Components/Task'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setTodoList([...todoList, task]);
  }
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((value) => {
      return value.id !== id
    })
    console.log(newTodoList);
    setTodoList(newTodoList);
  }
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        }
        else {
          return task;
        }
      })
    );
  };
  const deleteAll = () => {
    setTodoList([])
  }
  return (
    <div className="App">

      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add task</button>
        <button onClick={deleteAll}>Delete all</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        })}
      </div>
      {/* {newTask} */}
    </div>
  );
}

export default App;
