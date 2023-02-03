import './App.css'
import {useState} from 'react'


function App() {
   //handle textboxvalue
 const [input, setInput] = useState('')
 //preapare todos handle array
 const[todos, setTodos] = useState([])

 //handle submit button

 function addTodo() {
  const item = {
    id : Math.floor(Math.random()*1000),
    value : input,
    status: false
    }
    
    setTodos(oldTodos => [...oldTodos, item])
    setInput('')
    
 }
 //delete
 function deleteTodo(id) {
  const newItems = todos.filter(todo =>todo.id !==id)
  setTodos (newItems)
 }
  //done
  function doneTodo(id) {
    const todoIndex = todos.findIndex(todo => todo.id == id)
    //make status true
    const tmpTodo = [...todos]
    tmpTodo[todoIndex].status = true
    setTodos(tmpTodo)
    console.log(todos)
  }
 
  return (
    
    <div className="App">
      
      <input onChange={e => setInput(e.target.value) } value={input}placeholder='Add to do'/>
      <button onClick={() => addTodo()}>Pasa mo!</button>
      <hr />
      <ul>
       {todos.map(todo => {
        return (
          <li key={todo.id} style ={{ textDecoration: todo.status ? 'line-through' : ''}}>
            {todo.value}
          <button onClick={()=> deleteTodo(todo.id)}>❌</button>
          <button onClick={()=> doneTodo(todo.id)}>✅</button>

          </li>
        )
       }
        )}
      </ul>
    </div>
    
  )
}

export default App
