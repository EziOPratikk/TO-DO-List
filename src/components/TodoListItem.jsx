import { useState } from 'react';

import { BsEraserFill } from 'react-icons/bs';

export default function TodoListItem(props) {
  const [isDone, setIsDone] = useState(false);

  function checkItemHandler() {
    setIsDone(!isDone);
  }

  return (
    <div className='todo-item-container'>
      <li
        onClick={checkItemHandler}
        style={{ textDecoration: isDone && 'line-through #fdcb6e 0.3rem' }}
      >
        {props.title}
      </li>

      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <span>
          <BsEraserFill />
        </span>
      </button>
    </div>
  );
}