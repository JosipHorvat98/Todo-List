import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.description}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
