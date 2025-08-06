import React from "react";
import styled from "styled-components";
import "./style.css"; // звичайний CSS
import styles from "./style.module.scss"; // CSS Module

const StyledTitle = styled.h2`
  color: purple;
  font-size: 26px;
`;

const Tailwind = () => {
  return (
    <div className="space-y-10 p-6 bg-gray-100 min-h-screen">
      {/* 🔹 Завдання 1: Title різними стилями */}
      <section className="p-4 bg-white rounded shadow">
        <h1 className="text-xl font-bold">Завдання 1: Усі стилі</h1>

        {/* CSS */}
        <h2 className="title">Привіт з CSS</h2>

        {/* CSS Module */}
        <h2 className={styles.title}>Привіт з CSS Module</h2>

        {/* Inline */}
        <h2 style={{ color: "green", fontSize: "22px" }}>
          Привіт з Inline Styles
        </h2>

        {/* Styled-components */}
        <StyledTitle>Привіт зі Styled-components</StyledTitle>

        {/* Tailwind */}
        <h2 className="text-2xl font-bold text-red-500">
          Привіт з Tailwind CSS
        </h2>
      </section>

      {/* 🔹 Завдання 2: ProductCard */}
      <section className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800">Велосипед</h2>
        <p className="text-gray-600 mt-2">
          Надійний супутник для активного відпочинку 🚴
        </p>
        <p className="text-lg font-semibold text-green-600 mt-4">$1200</p>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Купити
        </button>
      </section>

      {/* 🔹 Завдання 3: Тема + Utility */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold">Завдання 3: Тема і Utility</h2>
        <button className="btn-primary">Кнопка з темою</button>
      </section>

      {/* 🔹 Завдання 4: Sidebar з Container Queries */}
      <section className="container border p-4 mx-auto @container bg-white rounded shadow">
        <aside className="bg-gray-200 p-4">
          <div className="@md:flex @md:flex-col">
            <p>Я Sidebar!</p>
            <p>Змінюю розташування при ширині контейнера</p>
          </div>
        </aside>
      </section>

      {/* 🎁 Бонус: UI-бібліотека */}
      <section className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold">Бонус: UI Kit</h2>
        <Card>
          <Input placeholder="Ваше ім'я" />
          <Button>Відправити</Button>
        </Card>
      </section>
    </div>
  );
};

function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      {children}
    </button>
  );
}

function Input(props) {
  return (
    <input
      className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      {...props}
    />
  );
}

function Card({ children }) {
  return (
    <div className="p-4 shadow-lg border rounded-lg bg-white">{children}</div>
  );
}

export default Tailwind;
