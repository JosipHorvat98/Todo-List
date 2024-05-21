import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (description) => {
    const newTodo = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'pending') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
