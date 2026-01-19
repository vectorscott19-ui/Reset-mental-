import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 16px",
        marginTop: 10,
        borderRadius: 6,
        border: "none",
        backgroundColor: "#222",
        color: "#fff",
        fontSize: 16
      }}
    >
      {text}
    </button>
  );
}

export default Button;
