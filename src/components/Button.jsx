function Button(props) {
  return (
    <button {...props} className="bg-slate-400 text-left text-white p-2 rounded-md w-full space-y-4b">
      {props.children}
    </button>
  );
}

export default Button;
