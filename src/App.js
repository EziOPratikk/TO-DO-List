import { useState } from 'react';

import Header from './components/Header';
import Input from './components/Input';
import TodoListItem from './components/TodoListItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState('');

  function inputHandler(event) {
    setTodoItem(event.target.value);
  }

  function addTodoHandler() {
    if (todoItem !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoItem,
        },
      ]);

      setTodoItem('');
    }
  }

  function deleteTodoHandler(id) {
    const filteredTodos = todos.filter((item) => {
      return item.id !== id;
    });

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
          <TodoListItem
            key={item.id}
            id={item.id}
            title={item.title}
            onDelete={deleteTodoHandler}
          />
        );
      })}
    </div>
  );
}

export default App;
