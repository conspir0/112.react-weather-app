import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        onChange={props.change}
        type="text"
        value={props.value}
        placeholder="Write City"
      />
      <button>Search</button>
    </form>
  );
};

export default Form;
