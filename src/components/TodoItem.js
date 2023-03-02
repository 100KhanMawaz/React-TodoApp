//Rafc returns named export and rafce returns default export
//here rafc is used
import React from 'react'

export const TodoItem = (props) => {
  return (
    <div> 
      <h4>{props.todo.title}</h4>
      <p>{props.todo.description}</p>
      <div className="btn btn-danger btn-sm" onClick={()=>{props.OnDelete(props.todo)}}>Delete</div>
      <hr />
    </div>
  )
}
