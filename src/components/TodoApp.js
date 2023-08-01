import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users/1/todos';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from the API
    axios.get(API_ENDPOINT)
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  // Function to add a new task
  const addTodo = (title) => {
    if (title.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Function to toggle task completion status
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function to remove a task
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;