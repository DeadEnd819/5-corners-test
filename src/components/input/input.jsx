function Input(props) {
  return (
    <div className="input">
      <>
        <input type={props.type} id={props.id} name={props.name} />
        <label htmlFor={props.id}>
          <span className="input__label">{props.label}</span>
        </label>
      </>
    </div>
  );
}

export default Input;
