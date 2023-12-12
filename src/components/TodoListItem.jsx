import { useState } from 'react';

function TodoListItem(props) {
  const [isDone, setIsDone] = useState(false);

  function checkItemHandler() {
    setIsDone(!isDone);
  }

  return (
    <ul>
      <div className='todo-item-container'>
        <li
          onClick={checkItemHandler}
          style={{ textDecoration: isDone && 'line-through' }}
        >
          {props.title}
        </li>
        <button
          className='delete-btn'
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          X
        </button>
      </div>
    </ul>
  );
}

export default TodoListItem;
