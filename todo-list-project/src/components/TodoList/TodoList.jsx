import { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      if (Array.isArray(response.data)) {
        setTodos(response.data);
      } else {
        console.error('Invalid data received from the server:', response.data);
      }
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    
    fetchTodos();
  }, []);

  const updateTodoList = async () => {
    await fetchTodos();
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} updateTodoList={updateTodoList} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
