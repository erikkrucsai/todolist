import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'



function App() {
  
  const updateTodoList = () => {
    // Implement your logic to update the todo list
    console.log('Todo list updated');
  };

  return (
    <div>
    <h1>Todo App</h1>
    <TodoForm updateTodoList={updateTodoList} />
    <TodoList />
  </div>
  )
}

export default App
