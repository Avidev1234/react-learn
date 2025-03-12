import { useState } from "react";

export const Todoform = ({ onAddTodo }) => {
  const [inputvalue, setInputvalue] = useState({});
  // const [inputvalue, setInputvalue] = useState("");
  const handleInputchange = (value) => {
    setInputvalue({ id: value, content: value, checked: false });//for object
    // setInputvalue(value);//for array
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputvalue);
    // setInputvalue("");//for array
    setInputvalue({ id: "", content: "", checked: false });//for object
  }; 

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter text..."
            className="todo-input"
            autoComplete="off"
            value={inputvalue.content}
            onChange={(e) => handleInputchange(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
