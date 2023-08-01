
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  const [showCompleted, setShowCompleted] = useState(false);

  const handleFilterChange = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTodos = showCompleted
    ? todos.filter(todo => todo.completed)
    : todos;

  return (
    <div>
      <div>
        <label>
          Show Completed:
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <table>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </table>
    </div>
  );
};

export default TodoList;