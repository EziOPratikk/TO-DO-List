import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import TodoListItem from './components/TodoListItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState('');

  function inputHandler(event) {
    const todoTitle = event.target.value;

    setTodoItem(todoTitle);
  }

  function addTodoHandler() {
    if (todoItem !== '') {
      setTodos((prevTodo) => {
        return [
          ...prevTodo,
          {
            id: Date.now(),
            title: todoItem,
          },
        ];
      });

      setTodoItem('');
    }
  }

  function deleteTodoHandler(id) {
    const filteredTodos = todos.filter((item) => item.id !== id);

    setTodos(filteredTodos);
  }

  return (
    <div className='container'>
      <Header />
      <Input
        onChange={inputHandler}
        value={todoItem}
        onClick={addTodoHandler}
      />
      {todos.map((item) => {
        return (
          <ul key={item.id}>
            <TodoListItem
              id={item.id}
              title={item.title}
              onDelete={deleteTodoHandler}
            />
          </ul>
        );
      })}
    </div>
  );
}

export default App;