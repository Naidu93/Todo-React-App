import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  // const handleChange = (event) => {
  //   setInput(event.target.value);
  //   // console.log(input);
  // };
  const handleClick = (event) => {
    event.preventDefault();

    const cpyTodo = [...todo, input];
    setTodo(cpyTodo);
    setInput("");
  };
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      let newTodo = todo.filter((_, i) => i !== index);
      setTodo(newTodo);
    }
  };
  // console.log(input, todo);
  return (
    <>
      <form className="App">
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button onClick={handleClick}>Add</button>
      </form>
      <ul>
        {todo.map((item, index) => {
          return (
            <>
              <li
                style={{ cursor: "pointer", marginBottom: "20px" }}
                onClick={() => handleDelete(index)}
                key={index}
              >
                {item}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
