function Input(props) {
  return (
    <input
      //   type={props.type}
      //   value={props.value}
      //   placeholder={props.placeholder}
      //   onChange={props.onChange}
      {...props}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
    />
  );
}

export default Input;
