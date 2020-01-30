import React from "react";

export default props => (
  <div style={{ display: "flex", justifyContent: "center", padding: "2px" }}>
    <div
      onClick={props.toggleComplete}
    >
      <input type="checkbox" />
    </div>
    <div style={{
      textDecoration: props.todo.complete ? "line-through" : ""
    }}>{props.todo.text}</div>
  </div>
);
