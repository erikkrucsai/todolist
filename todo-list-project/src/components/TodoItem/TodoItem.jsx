import PropTypes from 'prop-types';
import axios from 'axios';

const TodoItem = ({ todo, updateTodoList }) => {
  const handleUpdateTodo = async () => {
    // Update todo status
    await axios.put(`/api/todos/${todo._id}`);
    // Fetch updated todos
    updateTodoList();
  };

  const handleDeleteTodo = async () => {
    // Delete a todo
    await axios.delete(`/api/todos/${todo._id}`);
    // Fetch updated todos
    updateTodoList();
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleUpdateTodo} />
      {todo.task}
      <button onClick={handleDeleteTodo}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  updateTodoList: PropTypes.func.isRequired,
};

export default TodoItem;
