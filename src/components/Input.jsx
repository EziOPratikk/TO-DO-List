function Input(props) {
  return (
    <div className='form'>
      <input
        type='text'
        onChange={props.onChange}
        value={props.value}
        placeholder='Task me up!'
      />
      <button onClick={props.onClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
