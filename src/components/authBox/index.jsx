import React, { useState } from "react";

function AuthBox({ role }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const isLongEnough = text.length >= 10;

  let buttonText;
  switch (role) {
    case "admin":
      buttonText = "Панель керування";
      break;
    case "user":
      buttonText = "Мій профіль";
      break;
    case "guest":
      buttonText = "Зареєструватися";
      break;
    default:
      buttonText = "Невідома роль";
  }

  return (
    <>
      <div>
        {isLoggedIn ? (
          <p>Привіт, {name || "Гість"}!</p>
        ) : (
          <>
            <input
              type="text"
              placeholder="Введіть ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setIsLoggedIn(true)} disabled={!name.trim()}>
              Увійти
            </button>
          </>
        )}
      </div>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введіть текст"
        />
        <p style={{ color: isLongEnough ? "green" : "red" }}>
          {isLongEnough ? "✅ Достатньо символів" : "❌ Введіть ще"}
        </p>
      </div>

      <div>
        <button>{buttonText}</button>
      </div>
    </>
  );
}

export default AuthBox;
