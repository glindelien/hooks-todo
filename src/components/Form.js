import { useState } from 'react';

const Form = ({ addTask }) => {

  const [input, setInput] = useState('');

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={updateInput}></input>
      <input type="submit"></input>
    </form>
  );

};

export default Form;
