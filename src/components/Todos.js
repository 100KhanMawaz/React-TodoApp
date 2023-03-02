//Rafc returns named export and rafce returns default export
//here rafc is used
import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  return (
    <div className="container">
      <h2 className="my-3">Todos List</h2>
      {props.todos.length===0?"No Todos to display" :props.todos.map((todo)=>{
        return <TodoItem key={todo.sno} todo={todo} OnDelete={props.OnDelete}/>
      })}

    </div>
  )
}
