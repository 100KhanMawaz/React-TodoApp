import React,{useState} from 'react'

export const AddTodo = (props) => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title||!description)
        alert('Title or Description cannot be blank');
        else
        {
        props.AddTodo(title,description);
        settitle("");
        setdescription("");
        }
    }
  return (
      <div className="container">
       <h2 className='my-3'>My Todos App</h2>
    <form onSubmit={submit} >
  <div className="form-group">
    <label htmlFor="title">Todos Title</label>
    <input type="text" value={title} className="form-control" onChange={(e)=>settitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group my-2">
    <label htmlFor="Description">Description</label>
    <input type="text" value={description} onChange={(e)=>setdescription(e.target.value)} className="form-control" id="description"/>
  </div>
  <button type="submit" className="my-2 btn btn-success btn-sm">Add Todo</button>
</form>
   </div>
  )
}
