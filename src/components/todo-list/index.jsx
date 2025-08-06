import React from "react";

const TodoList = () => {
  const todos = [
    { id: 1, task: "Вивчити React" },
    { id: 2, task: "Зробити домашнє завдання" },
    { id: 3, task: "Прогулятись на свіжому повітрі" },
  ];
  const users = [
    { name: "Олена", email: "olena@.com" },
    { name: "Влад", email: "vlad@.com" },
  ];
  const posts = [
    { title: "Мій перший пост", text: "Це текст першого поста." },
    { title: "Урок пройдено!", text: "Робота зі списками" },
  ];
  return (
    <div>
      <div>
        <h2>Список завдань</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Користувачі</h2>
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Список постів</h2>
        {posts.length === 0 ? (
          <p>Постів ще немає</p>
        ) : (
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
