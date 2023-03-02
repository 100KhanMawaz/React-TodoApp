import './App.css';
import { Footer } from './components/Footer';//This componenet is exported as named export that is rafc so we have to import this with curl braces and with exactly same name 
import Header from './components/Header';//This is exported with default export so we can import this without curly braces.
import { Todos } from './components/Todos';//This component is exported as named export that is rafc so we have to import this with curl braces and with exactly same name 
import { useState,useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null)
  {
    //localStorage.getItem('todos') by this we check that if there exist any local storage with name todos
    //SInce no local storage exists of name todo so make initTodo=empty array
    initTodo=[];
  }
  else
  {//If some local storage with name todos exists then we will get that item with below code and after parsing we will assign it in initTodo variable
    initTodo=JSON.parse(localStorage.getItem('todos'));
  }
  //Now whatever is in initTodo will be passed to todo(useState) initially
  const onDelete=(todo)=> {
    settodos(todos.filter((x)=>{
      return x!==todo;
    }))
    {/* Note* Filter function creates a new array IN the above function filter will iterate over all the element or jaise for loop mein i lete hai waise hi idhar x liye hai to jo bhi x!==todo hai to wo return hokar settodos mein set ho jayega or jo bhi x ===todo hai wo return ni hoga or settodos mein set nai hoga  Deleting using filter in javascript type karo youtube mein CodeMentor channel pe explain kiya hua hai*/}
  }
  let sno=1;
  const addTodo=(title,description)=>{
    console.log(`Todo Added,${title},${description}`);
    if(todos.length===0)
    sno=1;
    else
   sno=todos[todos.length-1].sno+1;
    const NewTodo={
    sno:sno,
    title:title,
    description:description
    }
    console.log(NewTodo);
    settodos([...todos,NewTodo]);//Meaning of this line is ki jo todos pehle se hai usko rehne do or NewTodo jo hai use add kardo
  }
  const [todos, settodos] = useState(initTodo);
  //The below code tells us to update localStorage with todos whenever todos is changed so whenever todo will be added or deleted then this use effect will be executed
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    <Header title="My Todos List" searchBaar={true}/>
    <AddTodo AddTodo={addTodo}/>
    <Todos key={sno} todos={todos} OnDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
