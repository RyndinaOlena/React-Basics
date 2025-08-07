import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      body,
      userId: 1,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      const data = await response.json();
      console.log("Відповідь сервера:", data);

      // Очистити форму
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Помилка під час надсилання POST-запиту:", error);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            style={{ padding: "8px", marginBottom: "10px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            style={{ padding: "8px", marginBottom: "10px" }}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter body"
          />
        </div>
        <button type="submit">Send Post</button>
      </form>
    </div>
  );
};
export default CreatePost;
