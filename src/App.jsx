import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid'
import {AiTwotoneDelete} from 'react-icons/ai'
import './App.css'

export default function App() {
  const [task, setTask] = useState('')
  const [toDos, setToDos] = useState([])

  /*
  
    1. Implement an checkbox that determines whether the task at hand is active or completed.
    2. Create a darkmode.

  */

  function handleClick() {
    if(task !== ''){
      setToDos(prevTodos => {
        return [{
          desc: task,
          id: nanoid(),
          completed: false,
        }, ...prevTodos]
      })
      setTask('')
    } else {
      return 'NO_INPUT'
    }
  }

  function handleDelete(id){
    // filter through the toDo array for the todo.id
      // return if todo.id does not match the id
    setToDos(prevTodos => {
      return prevTodos.filter((toDo) => {
        return toDo.id !== id;
      })
    })
  }

  const toDoElements = toDos.map((toDo) => {
    return <div key={nanoid()} className="toDoElement">
      <li>{toDo.desc}</li>
      <button onClick={() => handleDelete(toDo.id)} className="delete-button">
        <AiTwotoneDelete />
      </button>
    </div>
  })

  return(
    <main>
      <div className="container">
        <nav>
          <h1 className="title">THINGS TO DO</h1>
          <input 
            type="text" 
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </nav>
        <div className="content">
          <ul>
            {toDoElements}
          </ul>
        </div>
      </div>
      <footer>
        <button
            onClick={handleClick}
            className="add-button"
          >
            <div className="text">
              <h3><span>Add</span></h3>
              <h3>| {`${toDos.length} items left`}</h3>
            </div>
        </button>
      </footer>
    </main>
  )
}