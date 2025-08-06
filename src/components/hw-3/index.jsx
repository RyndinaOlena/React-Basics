import React, { useState } from "react";

const Actions = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <button onClick={() => setMessage("Це кнопка кліку")}>Клік</button>

      <button
        onMouseEnter={() => setMessage("Це кнопка при наведенні")}
        onMouseLeave={() => setMessage("")}
      >
        Наведіть мишку
      </button>

      <button onDoubleClick={() => setMessage("Це кнопка подвійного кліку")}>
        Подвійний клік
      </button>

      <button
        onContextMenu={(e) => {
          e.preventDefault();
          setMessage("Це кнопка контекстного меню (правий клік)");
        }}
      >
        Правий клік
      </button>

      <p>{message}</p>
    </div>
  );
};

export default Actions;
