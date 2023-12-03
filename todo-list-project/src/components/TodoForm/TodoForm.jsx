import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const TodoForm = ({ updateTodoList }) => {
  const [task, setTask] = useState('');

  const addTodo = async () => {
    try {
        // Add a new todo
        await axios.post('http://localhost:3000/api/todos', { task });
        // Clear the task input
        setTask('');
        // Fetch updated todos
        updateTodoList();
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    };

  return (
    <div>
      <h2>Add Todo</h2>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

TodoForm.propTypes = {
  updateTodoList: PropTypes.func.isRequired,
};

export default TodoForm;
