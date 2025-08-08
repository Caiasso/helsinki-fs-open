const Input = ({ text, handler, value }) => {
  return (
    <div>
      {text} <input onChange={handler} value={value} />
    </div>
  );
};

export default Input;
