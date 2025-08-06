import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import HW from "./components/nw-1";
import Actions from "./components/hw-3";
import State from "./components/hw-4";
import AuthBox from "./components/authBox";
import TodoList from "./components/todo-list";
import Forms from "./components/forms";
import Tailwind from "./components/tilewind";
import UseEffect from "./components/useEffect";

function App() {
  return (
    <>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "flex",
            gap: "80px",
          }}
        >
          <Link to="/">HW 1/2</Link>
          <Link to="/hw3">Actions HW-3</Link>
          <Link to="/hw4">State HW-4</Link>
          <Link to="/hw5">AuthBox HW-5</Link>
          <Link to="/hw6">TodoList HW-6</Link>
          <Link to="/hw7">Forms HW-7</Link>
          <Link to="/hw8">UseEffect HW-8</Link>
          <Link to="/hw11">Tilewind HW-11</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HW />} />
        <Route path="/hw3" element={<Actions />} />
        <Route path="/hw4" element={<State />} />
        <Route path="/hw5" element={<AuthBox />} />
        <Route path="/hw6" element={<TodoList />} />
        <Route path="/hw7" element={<Forms />} />
        <Route path="/hw8" element={<UseEffect />} />
        <Route path="/hw11" element={<Tailwind />} />
      </Routes>
    </>
  );
}

export default App;
