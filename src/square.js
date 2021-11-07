import React from "react";

const Square = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        border: "1px solid grey",
        height: 50,
        width: 50,
        outline: "none",
      }}
    >
      {props.value}
    </button>
  );
};

export default Square;