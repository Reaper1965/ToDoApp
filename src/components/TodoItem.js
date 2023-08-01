// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const { id, title, completed } = todo;

  const handleToggleComplete = () => {
    toggleComplete(id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
   <table className='table table-borderless table-hovered'>
     <tr className='row'>
     <td className='col-md-2'> <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleComplete}
      className=''/ ></td>
      <td className='col-md-7'>
      <span style={{ color:completed? 'red':'black' }}>
        {title}
      </span>
      </td>
      <td className='col-md-3'><button onClick={handleDeleteTodo} className='btn btn-danger'>Delete</button></td>
    </tr>
   </table>
  );
};

export default TodoItem;