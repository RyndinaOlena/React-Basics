import React, { useState } from "react";

const State = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");

  const toggleColor = () => {
    setColor((prev) => (prev === "black" ? "red" : "black"));
  };
  return (
    <div>
      <div>
        <button onClick={() => setVisible((prev) => !prev)}>
          Показати / Сховати
        </button>
        {visible && <p>Привіт, React!</p>}
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введи текст"
        />
        <p>Ви ввели: {text}</p>
      </div>
      <div>
        <button onClick={toggleColor}>Змінити колір</button>
        <p style={{ color }}>Цей текст змінює колір</p>
      </div>
    </div>
  );
};

export default State;
