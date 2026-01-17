function Input(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      onChange={props.onChange}
    />
  );
}

export default Input;
