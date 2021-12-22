import React, { useState } from "react";

function TodoInput({ onSubmit }) {
  const [state, setState] = useState({
    title: "",
    description: ""
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <div style={{ padding: 4 }}>
        <input
          placeholder="title"
          name="title"
          value={state.title}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ padding: 4 }}>
        <input
          placeholder="description"
          name="description"
          value={state.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input type="submit" value="ADD" />
      </div>
    </form>
  );
}

export default TodoInput;
