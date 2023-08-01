// src/components/AddTodoForm.js
import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add new task..."
       className='form-control' required/>
       <br></br>
       <div className='d-flex justify-content-center'>
       <button type="submit" className='btn btn-primary'>Add Task</button>
       </div>
      
    </form>
  );
};

export default AddTodoForm;