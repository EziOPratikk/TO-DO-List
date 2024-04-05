import { FaPencilAlt } from 'react-icons/fa';

function Input(props) {
  return (
    <div className='form'>
      <input
        type='text'
        onChange={props.onChange}
        value={props.value}
        placeholder='Task me up!'
        maxLength='15'
      />
      <button onClick={props.onClick}>
        <span>
          <FaPencilAlt />
        </span>
      </button>
    </div>
  );
}

export default Input;
